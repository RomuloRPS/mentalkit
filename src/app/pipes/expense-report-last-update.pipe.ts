import { Pipe, PipeTransform } from "@angular/core";

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale";
import {TranslateService} from "@ngx-translate/core";

import { ExpenseReportModel } from "../coloquent-model/expense-report/expense-report.model";
import { langsLocales } from "../helpers/date-fns/date-fns.helper";

@Pipe({
    name: 'expenseReportLastUpdatePipe'
})
export class ExpenseReportLastUpdatePipe implements PipeTransform {
    public constructor(private translateService: TranslateService) {}

    public transform(expenseReportResource: ExpenseReportModel) {
        const executedAt = new Date(expenseReportResource.getAttribute('updated_at'));

        return this.translateService.instant('LAST_UPDATE_LABEL')
            + ' '
            + formatDistanceToNow(executedAt, { locale: this.getLocale() });
    }

    private getLocale() {
        let browserLang = this.translateService.currentLang;

        if (browserLang.includes('-')) {
            browserLang = browserLang.split('-').shift();
        }

        if (Object.keys(langsLocales).includes(browserLang)) {
            return langsLocales[browserLang];
        }

        return langsLocales[this.translateService.getDefaultLang()];
    }
}
