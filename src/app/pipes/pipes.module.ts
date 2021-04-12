import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MenuIconPipe } from './menu-icon.pipe';
import { DateTimeFormatPipe } from './date-time-format.pipe';
import { AttachmentTokenPipe } from './attachment-token.pipe';

@NgModule({
    declarations: [
        SafeHtmlPipe,
        MenuIconPipe,
        DateTimeFormatPipe,
        AttachmentTokenPipe
    ],
    imports: [],
    entryComponents: [],
    exports: [
        SafeHtmlPipe,
        MenuIconPipe,
        DateTimeFormatPipe,
        AttachmentTokenPipe
    ]
})
export class PipesModule { }
