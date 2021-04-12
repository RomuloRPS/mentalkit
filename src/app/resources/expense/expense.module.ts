import { NgModule } from '@angular/core';
import { ExpenseOfflineFilter } from './expense.offline.filter';
import { ExpenseOffline } from './expense.offline';
import { ExpenseService } from './expense.service';
import { ExpenseHttp } from './expense.http';

@NgModule({
    providers: [
        ExpenseHttp,
        ExpenseService,
        ExpenseOffline,
        ExpenseOfflineFilter
    ]
})
export class  ExpenseModule { }
