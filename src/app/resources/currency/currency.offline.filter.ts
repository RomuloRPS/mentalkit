import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { PluralResponse } from 'coloquent';
import { ExpenseModel } from 'src/app/coloquent-model/expense/expense.model';

@Injectable()
export class CurrencyOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private expenseModel: ExpenseModel;

    public constructor(injector: Injector) {
        super(injector);
        this.expenseModel = injector.get(ExpenseModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(ExpenseModel.query().getQuery(), null, ExpenseModel, response);

            let data = pluralResponse.getData();

            this.filteredArray = data;

            if (filters) {
                if (filters.term) {
                    this.filteredArray = data.filter((expense) => {
                        if (this.searchName(expense, filters) !== -1) {
                            return expense;
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

    private searchName(expense, filters) {
        let name;
        let nameExist = -1;

        if (expense && expense.getAttribute('code')) {
            name = expense.getAttribute('code').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }
}
