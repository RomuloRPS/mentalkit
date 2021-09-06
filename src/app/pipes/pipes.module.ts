import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MenuIconPipe } from './menu-icon.pipe';
import { DateTimeFormatPipe } from './date-time-format.pipe';
import { AttachmentTokenPipe } from './attachment-token.pipe';
import { ExpenseReportLastUpdatePipe } from './expense-report-last-update.pipe';
import { MenuNamesPipe } from './menu-names.pipe';
import { StandardCategoryTranslatePipe } from './standard-category-translate.pipe';

@NgModule({
    declarations: [
        SafeHtmlPipe,
        MenuIconPipe,
        DateTimeFormatPipe,
        AttachmentTokenPipe,
        ExpenseReportLastUpdatePipe,
        MenuNamesPipe,
        StandardCategoryTranslatePipe
    ],
    imports: [],
    entryComponents: [],
    exports: [
        SafeHtmlPipe,
        MenuIconPipe,
        DateTimeFormatPipe,
        AttachmentTokenPipe,
        ExpenseReportLastUpdatePipe,
        MenuNamesPipe,
        StandardCategoryTranslatePipe
    ]
})
export class PipesModule { }
