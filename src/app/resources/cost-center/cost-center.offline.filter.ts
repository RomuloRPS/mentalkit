import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';
import { CostCenterModel } from 'src/app/coloquent-model/cost-center/cost-center.model';

@Injectable()
export class CostCenterOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private costCenterModel: CostCenterModel;

    public constructor(injector: Injector) {
        super(injector);
        this.costCenterModel = injector.get(CostCenterModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(CostCenterModel.query().getQuery(), null, CostCenterModel, response);

            let data = pluralResponse.getData();

            this.filteredArray = data;

            if (filters) {
                if (filters.term) {
                    this.filteredArray = data.filter((costCenter) => {
                        if (this.searchName(costCenter, filters) !== -1) {
                            return costCenter;
                        }
                    });
                }

                if (filters.limit){
                    this.filteredArray = this.filteredArray.splice(0, filters.limit);
                }

                if (filters.id) {
                    this.filteredArray = this.filteredArray.filter(user => user.getApiId() == filters.id);
                }
            }

            observer.next(this.filteredArray);
        });
    }

    private searchName(costCenter, filters) {
        let name;
        let nameExist = -1;

        if (costCenter && costCenter.getAttribute('name')) {
            name = costCenter.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }
}
