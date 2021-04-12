import { Injectable, Injector } from '@angular/core';
import { ExpenseReportHttp } from './expense-report.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class ExpenseReportService extends BaseResourceService {
    public httpService: ExpenseReportHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(ExpenseReportHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }

    public sendExpenseReport(ids) {
        return this.httpService.send(ids).toPromise();
    }

    public approveExpenseReport(ids) {
        return this.httpService.approveExpenseReport(ids).toPromise();
    }

    public requestEditExpenseReport(ids, observation, disapproved_expenses = null) {
        return this.httpService.requestEditExpenseReport(ids, observation, disapproved_expenses).toPromise();
    }
}
