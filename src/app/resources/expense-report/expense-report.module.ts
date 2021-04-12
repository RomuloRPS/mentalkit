import { NgModule } from '@angular/core';
import { ExpenseReportOfflineFilter } from './expense-report.offline.filter';
import { ExpenseReportOffline } from './expense-report.offline';
import { ExpenseReportService } from './expense-report.service';
import { ExpenseReportHttp } from './expense-report.http';

@NgModule({
    providers: [
        ExpenseReportHttp,
        ExpenseReportService,
        ExpenseReportOffline,
        ExpenseReportOfflineFilter
    ]
})
export class  ExpenseReportModule { }
