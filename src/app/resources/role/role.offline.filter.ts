import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';
import { RoleModel } from 'src/app/coloquent-model/role/role.model';

@Injectable()
export class RoleOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private roleResourceModel: RoleModel;

    public constructor(injector: Injector) {
        super(injector);
        this.roleResourceModel = injector.get(RoleModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(RoleModel.query().getQuery(), null, RoleModel, response);

            let data = pluralResponse.getData();

            if (filters) {
                if (filters.term) {
                    data = data.filter((role) => {
                        if (this.searchName(role, filters) !== -1) {
                            return role;
                        }

                        if (this.searchDescription(role, filters) !== -1) {
                            return role;
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

            this.filteredArray = data;

            observer.next(this.filteredArray);
        });
    }

    private searchName(role, filters) {
        let name;
        let nameExist = -1;

        if (role && role.getAttribute('name')) {
            name = role.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }

    private searchDescription(role, filters) {
        let description;
        let descriptionExist = -1;

        if (role && role.getAttribute('description')) {
            description = role.getAttribute('description').toLowerCase();

            return descriptionExist = role.indexOf(filters.term.toString().toLowerCase());
        }

        return descriptionExist;
    }
}
