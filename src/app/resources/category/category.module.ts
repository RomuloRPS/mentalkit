import { NgModule } from '@angular/core';
import { CategoryOfflineFilter } from './category.offline.filter';
import { CategoryOffline } from './category.offline';
import { CategoryService } from './category.service';
import { CategoryHttp } from './category.http';

@NgModule({
    providers: [
        CategoryHttp,
        CategoryService,
        CategoryOffline,
        CategoryOfflineFilter
    ]
})
export class  CategoryModule { }
