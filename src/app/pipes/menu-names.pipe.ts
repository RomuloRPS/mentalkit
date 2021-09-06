import { PipeTransform, Pipe } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MenuModel } from '../coloquent-model/menu/menu.model';

@Pipe({
    name: 'menuNamesPipe'
})
export class MenuNamesPipe implements PipeTransform {
    public constructor(private translateService: TranslateService) {}

    public transform(MenuResource: MenuModel) {
        const translateKey: string = "MENUS." + MenuResource.getAttribute('name');

        return this.translateService.instant(translateKey);
    }
}
