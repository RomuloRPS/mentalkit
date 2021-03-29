import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/worker/database/database.service';
import { SqlLiteTask } from 'src/app/worker/database/sql-lite-task';
import { Worker } from 'src/app/worker/Worker';
import { HttpTaskService } from '../http-task/http-task.service';

@Injectable({
    providedIn: 'root'
})
export class WorkerService {
    public tasks: Array<SqlLiteTask> = [];
    public interval;

    public constructor(private worker: Worker, private databaseService: DatabaseService) {
    }

    public async upWorker() {
        this.worker.stop().then(() => {
            this.worker.withProviders([HttpTaskService]);
            this.worker.up();
        });
    }

    public async updateTasks() {
        return this.getTasksFromStorage();
    }

    public runOnce() {
        return this.worker.runOnce();
    }

    public async getTasksFromStorage() {
        return new Promise<void>(async (resolve, reject) => {
            this.tasks = await this.databaseService.getTasks();
            resolve();
        });
    }

    public getTasks() {
        return this.tasks;
    }

    public getTasksLength() {
        return this.tasks.length;
    }

    public removeTask(taskIds) {
        return this.worker.removeTasks(taskIds);
    }

    public stopWorker() {
        return this.worker.stop();
    }
}
