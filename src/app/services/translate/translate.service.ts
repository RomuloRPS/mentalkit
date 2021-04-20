import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { promise } from 'selenium-webdriver';

@Injectable({
    providedIn: 'root'
})
export class EvTranslateService {
    public constructor(
        private translateService: TranslateService
    ) {}

    public async get(key) {
        const label = await this.translateKey(key);

        return label;
    }

    private translateKey(key) {
        return new Promise((resolve, reject) => {
            this.translateService.get(key).subscribe((resp) => {
                resolve(resp);
            });
        });
    }
}
