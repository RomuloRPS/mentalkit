import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
    public constructor() {
        super('en-us');
    }

    public transform(value: any, format: string = 'dd/MM/yyyy HH:mm:ss'): any {
        return super.transform(value, format);
    }
}
