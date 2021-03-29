import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ModalLoadingDataService {
    private loading = true;
    private succeeded = false;
    private failed = false;
    private warning = false;
    private failedText;
    private warningText;
    private successText;

    public constructor() { }

    public isLoading() {
        return this.loading;
    }

    public isSucceeded() {
        return this.succeeded;
    }

    public isFailed() {
        return this.failed;
    }

    public isWarning() {
        return this.warning;
    }

    public setSuccess(text) {
        this.loading = false;
        this.succeeded = true;
        this.successText = text;
    }

    public setFail(text) {
        this.loading = false;
        this.failed = true;
        this.failedText = text;
    }

    public setWarning(text) {
        this.loading = false;
        this.warning = true;
        this.warningText = text;
    }

    public getFailMessage() {
        return this.failedText;
    }

    public getSuccessMessage() {
        return this.successText;
    }

    public getWarningMessage() {
        return this.warningText;
    }

    public reset() {
        this.loading = true;
        this.succeeded = false;
        this.failed = false;
        this.warning = false;
        this.warningText = null;
        this.successText = null;
        this.failedText = null;
    }
}
