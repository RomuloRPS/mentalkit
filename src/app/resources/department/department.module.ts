import { NgModule } from '@angular/core';
import { DepartmentOfflineFilter } from './department.offline.filter';
import { DepartmentOffline } from './department.offline';
import { DepartmentService } from './department.service';
import { DepartmentHttp } from './department.http';

@NgModule({
    providers: [
        DepartmentHttp,
        DepartmentService,
        DepartmentOffline,
        DepartmentOfflineFilter
    ]
})
export class  DepartmentModule { }
