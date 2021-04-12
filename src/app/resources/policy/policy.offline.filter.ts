import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';
import { PolicyModel } from 'src/app/coloquent-model/policy/policy.model';

@Injectable()
export class PolicyOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private policyModel: PolicyModel;

    public constructor(injector: Injector) {
        super(injector);
        this.policyModel = injector.get(PolicyModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(PolicyModel.query().getQuery(), null, PolicyModel, response);

            let data = pluralResponse.getData();

            this.filteredArray = data;

            if (filters) {
                if (filters.term) {
                    this.filteredArray = data.filter((policy) => {
                        if (this.searchName(policy, filters) !== -1) {
                            return policy;
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

    private searchName(policy, filters) {
        let name;
        let nameExist = -1;

        if (policy && policy.getAttribute('name')) {
            name = policy.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }
}
