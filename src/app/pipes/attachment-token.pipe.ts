import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'attachmentToken'
})
export class AttachmentTokenPipe implements PipeTransform {
    public constructor(private sanitizer: DomSanitizer) { }

    public transform(token) {
        return `${environment.api}/attachments/${token}/preview`;
    }
}
