import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'attachmentToken'
})
export class AttachmentTokenPipe implements PipeTransform {
    public constructor(private sanitizer: DomSanitizer) { }

    public transform(token) {
        const tenancyId = localStorage.getItem('selectedTenancyId');

        return `${environment.api}/tenancies/${tenancyId}/attachments/${token}/thumbnail`;
    }
}
