import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';
import { DepartmentModel } from 'src/app/coloquent-model/department/department.model';

@Injectable()
export class DepartmentOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private departmentModel: DepartmentModel;

    public constructor(injector: Injector) {
        super(injector);
        this.departmentModel = injector.get(DepartmentModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(DepartmentModel.query().getQuery(), null, DepartmentModel, response);

            let data = pluralResponse.getData();

            this.filteredArray = data;

            if (filters) {
                if (filters.term) {
                    this.filteredArray = data.filter((department) => {
                        if (this.searchName(department, filters) !== -1) {
                            return department;
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

    private searchName(department, filters) {
        let name;
        let nameExist = -1;

        if (department && department.getAttribute('name')) {
            name = department.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }
}
