import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';

@Injectable()
export class UserOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private userResourceModel: UserResourceModel;

    public constructor(injector: Injector) {
        super(injector);
        this.userResourceModel = injector.get(UserResourceModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(UserResourceModel.query().getQuery(), null, UserResourceModel, response);

            let data = pluralResponse.getData();

            this.filteredArray = data;

            if (filters) {
                if (filters.term) {
                    this.filteredArray = data.filter((user) => {
                        if (this.searchName(user, filters) !== -1) {
                            return user;
                        }

                        if (this.searchEmail(user, filters) !== -1) {
                            return user;
                        }
                    });
                }

                if(filters.menuFilters && filters.menuFilters.role) {
                    this.filteredArray = this.filteredArray.filter((user)  => {
                        if (user.getRelation('roles')) {
                            let userExist = false;

                            user.getRelation('roles').forEach(role => {
                                if (role.getAttribute('name') == filters.menuFilters.role) {
                                    userExist = true;
                                }
                            });

                            return userExist;
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

    private searchName(user, filters) {
        let name;
        let nameExist = -1;

        if (user && user.getAttribute('name')) {
            name = user.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }

    private searchEmail(user, filters) {
        let email;
        let emailExist = -1;

        if (user && user.getAttribute('email')) {
            email = user.getAttribute('email').toLowerCase();

            return emailExist = email.indexOf(filters.term.toString().toLowerCase());
        }

        return emailExist;
    }
}
