import { SchedulableTask } from "./SchedulableTask";
import { Queue } from "./Queue";
import * as localforage  from 'localforage';
import { DatabaseService } from './database/database.service';
import { Injectable } from '@angular/core';
import { SqlLiteTask } from './database/sql-lite-task';

@Injectable({
    providedIn: 'root'
})
export class Worker {
    private  queues: Array<Queue> = [{ key: 'default', timeCycle: 5000, isRunning: false }];
    private  providers = {};
    private  isRunning = false;
    private  intervalId;

    public constructor(private databaseService: DatabaseService) {
    }

    public  afterRun() {
        this.isRunning = false;
    }

    /**
     * Derruba o worker
     */
    public  stop() {
        return new Promise<void>((resolve, reject) => {
            this.queues.map((queue: Queue) => {
                let recursiveStop = () => {
                    setTimeout(() => {
                        //Se estiver rodando um ciclo, espera até acabar
                        if (this.isRunning) {
                            recursiveStop();
                        } else {
                            //Se não estiver executando, para o worker
                            clearInterval(this.intervalId);
                            this.intervalId = undefined;
                            resolve();
                        }
                    }, 500);
                };

                recursiveStop();
            });
        });
    }

    public  withProviders(providers: Array<SchedulableTask> | object) {
        if (Array.isArray(providers)) {
            providers.forEach((provider: SchedulableTask) => {
                this.providers[(new (<any>provider)).constructor.name] = provider;
            });
        } else {
            this.providers = providers;
        }
    }

    public  getProvider(key: string) {
        if (this.providers[key]) {
            return this.providers[key];
        }

        throw new Error('Provider with key ' + key + ' not found!');
    }

    public addTask(task: SchedulableTask) {
        return this.databaseService.addTask(task);
    }

    public  removeTasks(ids: Array<number>) {
        return new Promise<void>(async (resolve, reject) => {
            ids.forEach(async (id) => {
                await this.databaseService.deleteTask(id);
            });

            resolve();
        });
    }

    public  up() {
        this.queues.forEach((queue: Queue) => {
            if (!this.intervalId) {
                this.intervalId = setInterval(() => {
                    this.runOnce().then(() => 'sucess').catch((error) => error);
                }, queue.timeCycle);
            } else {
                console.error('queue already running');
            }
        });
    }

    public  runOnce() {
        return new Promise<void>(async (resolve, reject) => {
            let taskList = await this.databaseService.getTasks();

            console.log('runOnce');
            taskList = taskList.sort((a, b ) => a.tries > b.tries ? 1 : -1);

            //Se não houver um outro ciclo rodando
            if (!this.isRunning) {
                if (taskList && taskList.length) {
                    this.runTask(taskList[0].data).then((response) => {
                        this.isRunning = false;

                        resolve();
                    }).catch((error) => {
                        reject(error);
                    });
                }
            } else {
                console.log('ainda rodando');
                reject('queueStillRunning');
            }
        });
    }

    private  runTask(task) {
        return new Promise<void>((resolve, reject) => {
            //Marca o ciclo como em execução
            this.isRunning = true;
            console.log('runTask');

            let taskProvider = this.getProvider(JSON.parse(task).storageKey);
            let decoratedTask: SchedulableTask = taskProvider.decorate(JSON.parse(task));

            if (decoratedTask) {
                decoratedTask.handle().then(async (response) => {
                    this.databaseService.deleteTask(decoratedTask.id).then(() => {
                        console.log('finishedTask');

                        decoratedTask.afterHandle(decoratedTask);
                        this.afterRun();
                        this.isRunning = false;

                        resolve();
                    }).catch((error) => {
                        decoratedTask.afterHandle(decoratedTask);
                        this.afterRun();
                        this.isRunning = false;
                    });
                }).catch(async (error) => {
                    decoratedTask.lastExecuted = new Date();
                    decoratedTask.tries++;

                    decoratedTask.errors = decoratedTask.errors ? decoratedTask.errors : [];
                    decoratedTask.errors.push(JSON.stringify(error, null, 2));;
                    decoratedTask.errors = decoratedTask.errors.slice(-5);

                    this.databaseService.updateTask(decoratedTask.id, decoratedTask).then(() => {
                        this.isRunning = false;

                        this.afterRun();
                        reject('taskError');
                    });
                });
            } else {
                this.afterRun();
                reject('runningQueue');
            }
        });
    }
}
