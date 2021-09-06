import { Pipe } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GlobalInjector } from "src/app/helpers/injector/global-injector";
import { standardCategories } from "src/app/resources/category/category.meta";
import { CategoryModel } from "../coloquent-model/category/category.model";

@Pipe({
    name: 'standardCategoryTranslate',
    pure: false
})
export class StandardCategoryTranslatePipe {
    private translateService: TranslateService;

    public constructor() {
        this.translateService = GlobalInjector.injector.get(TranslateService);
    }

    public transform(categoryResource: CategoryModel) {
        if (!categoryResource) {
            return '';
        }

        if (categoryResource.getAttribute('tenancy_id')) {
            return categoryResource.getAttribute('name');
        }

        if (standardCategories.includes(categoryResource.getAttribute('name'))) {
            return this.translateService.instant(`CATEGORY.${categoryResource.getAttribute('name')}`);
        }

        return categoryResource.getAttribute('name');
    }
}
