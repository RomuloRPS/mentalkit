import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MenuIconPipe } from './menu-icon.pipe';
import { DateTimeFormatPipe } from './date-time-format.pipe';

@NgModule({
    declarations: [
        SafeHtmlPipe,
        MenuIconPipe,
        DateTimeFormatPipe
    ],
    imports: [],
    entryComponents: [],
    exports: [
        SafeHtmlPipe,
        MenuIconPipe,
        DateTimeFormatPipe
    ]
})
export class PipesModule { }
