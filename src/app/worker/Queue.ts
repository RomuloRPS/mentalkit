export class Queue {
    public key: string;
    public timeCycle: number;
    public intervalId?: number;
    public isRunning: boolean;

    public constructor(key){
        this.key = key;
    }
}
