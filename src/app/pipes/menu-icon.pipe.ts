import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'menuIcon'
})
export class MenuIconPipe implements PipeTransform {
    public constructor() { }

    public transform(text) {
        switch (text) {
            case 'qr-scanner':
                return 'elo-model';
            case 'options':
                return 'elo-inventory';
            case 'swap':
                return 'elo-collect';
            case 'trash':
                return 'elo-verde';
            case 'elo elo-company':
                return 'elo-company';
            case 'elo elo-companies':
                return 'elo-companies';
            case 'elo elo-user':
                return 'elo-user';
            case 'elo elo-movement':
                return 'elo-verde';
            case 'elo elo-users':
                return 'elo-users';
            case 'elo elo-pen':
                return 'elo-users';
            case 'elo elo-document':
                return 'elo-document';
            case 'elo elo-tool':
                return 'elo-task';
            case 'elo elo-dashboard':
                return 'elo-monitor';
            default:
                return text;
        }
    }
}
