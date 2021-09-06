import { NgModule } from '@angular/core';
import { CurrencyOfflineFilter } from './currency.offline.filter';
import { CurrencyOffline } from './currency.offline';
import { CurrencyService } from './currency.service';
import { CurrencyHttp } from './currency.http';

@NgModule({
    providers: [
        CurrencyHttp,
        CurrencyService,
        CurrencyOffline,
        CurrencyOfflineFilter
    ]
})
export class  CurrencyModule { }
