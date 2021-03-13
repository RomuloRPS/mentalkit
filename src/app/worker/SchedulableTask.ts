import { Worker } from "./Worker";

export abstract class SchedulableTask {
    public id = Date.now();
    public queue = 'default';
    public tries = 0;
    public lastExecuted: Date;
    public errors: Array<string>;

    public storageKey = this.constructor.name;

    public static decorate(jsonObject) {
        let obj = new (<any>this);

        for (let prop in jsonObject) {
            if (prop) {
                obj[prop] = jsonObject[prop];
            }
        }

        return obj;
    }

    public serialize() {
        return JSON.stringify(this);
    }

    public abstract handle(): Promise<any>;

    public abstract afterHandle(data);
}
