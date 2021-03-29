import { HttpClient, HttpEventType } from '@angular/common/http';
import { SchedulableTask } from 'src/app/worker/SchedulableTask';
import { AppInjectorService } from '../app-injector.service';
import { WorkerService } from '../worker/worker.service';

export class HttpTaskService extends SchedulableTask {
    public name;
    public data;
    public url;
    public method;

    public constructor() {
        super();
    }

    public handle() {
        const httpClient = AppInjectorService.getInjector().get(HttpClient);

        if (this.method == "put") {
            return httpClient.put(this.url, this.data).toPromise();
        }

        return httpClient.post(this.url, this.data).toPromise();
    }

    public afterHandle(task) {
        const workerService = AppInjectorService.getInjector().get(WorkerService);

        if (task.name === 'tenancies/:tenancy_id/transport-tasks/execute') {
            this.addExecutedTaskToFinished(task);
        }

        if (task.name === 'tenancies/:tenancy_id/transport-tasks/cancel') {
            this.addCancelledTaskToFinished(task);
        }

        workerService.updateTasks().then((resp) => {

        });
    }

    public setName(name: string) {
        this.name = name;
    }

    public setUrl(url: string) {
        this.url = url;
    }

    public setData(data) {
        this.data = data;
    }

    public setMethod(method) {
        this.method = method;
    }

    private addExecutedTaskToFinished(task) {
        const finishedTasksIds = localStorage.getItem('finishedTasks');
        let parsedTaskIdList = [];

        if (finishedTasksIds) {
            parsedTaskIdList= JSON.parse(finishedTasksIds);
        }

        let taskId = task.data.execution_data[0].transport_task_id;

        parsedTaskIdList.push(taskId);

        localStorage.setItem('finishedTasks', JSON.stringify(parsedTaskIdList));
    }

    private addCancelledTaskToFinished(task) {
        const finishedTasksIds = localStorage.getItem('finishedTasks');
        let parsedTaskIdList = [];

        if (finishedTasksIds) {
            parsedTaskIdList= JSON.parse(finishedTasksIds);
        }

        task.data.transport_tasks.forEach(task => {
            parsedTaskIdList.push(task.transport_task_id);
        });

        localStorage.setItem('finishedTasks', JSON.stringify(parsedTaskIdList));
    }
}
