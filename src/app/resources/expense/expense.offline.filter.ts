import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';
import { ExpenseModel } from 'src/app/coloquent-model/expense/expense.model';
import { ExpenseReportStatusEnum } from 'src/app/coloquent-model/expense-report/expense-report.model';

@Injectable()
export class ExpenseOfflineFilter extends BaseOfflineFilter {
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

                        if (this.searchCategory(expense, filters) !== -1) {
                            return expense;
                        }

                        if (this.searchProvider(expense, filters) !== -1) {
                            return expense;
                        }
                    });
                }

                if(filters.menuFilters && filters.menuFilters.category) {
                    this.filteredArray = this.filteredArray.filter((expense)  => {
                        if (expense.getRelation('category')) {
                            let categoryExist = false;

                            if (expense.getRelation('category').getApiId() == filters.menuFilters.category.getApiId()) {
                                categoryExist = true;
                            }

                            return categoryExist;
                        }
                    });

                    if (filters.expense_report_id){
                        this.filteredArray = this.filteredArray.filter(expense => {
                            if (expense && expense.getRelation('expenseReport').getApiId()) {
                                return expense;
                            }
                        });
                    }
                }

                if(filters.menuFilters && filters.menuFilters.date) {
                    const today = new Date(filters.menuFilters.date).toISOString().split('T')[0];

                    this.filteredArray = this.filteredArray.filter((expense)  => {
                        if (expense.getAttribute('issue_date') === today) {
                            return expense;
                        }
                    });
                }

                if (filters.noExpenseReport) {
                    this.filteredArray = this.filteredArray.filter(expense => {
                        if (expense && !expense.getRelation('expenseReport')) {
                            return expense;
                        }

                        console.log(filters);

                        if (filters.expenseReportId) {
                            if (expense && expense.getRelation('expenseReport') && expense.getRelation('expenseReport').getApiId() == filters.expenseReportId) {
                                return expense;
                            }
                        }
                    });
                }

                if (filters.expenseIds) {
                    this.filteredArray = this.filteredArray.filter(expense => {
                        if (filters.expenseIds.includes(expense.getApiId())) {
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

        if (expense && expense.getAttribute('name')) {
            name = expense.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }

    private searchProvider(expense, filters) {
        let provider;
        let providerExist = -1;

        if (expense && expense.getAttribute('provider')) {
            provider = expense.getAttribute('provider').toLowerCase();

            return providerExist = provider.indexOf(filters.term.toString().toLowerCase());
        }

        return providerExist;
    }

    private searchCategory(expense, filters) {
        let categoryName;
        let categoryExist = -1;

        if (expense && expense.getRelation('category').getAttribute('name')) {
            categoryName = expense.getRelation('category').getAttribute('name').toLowerCase();

            return categoryExist = categoryName.indexOf(filters.term.toString().toLowerCase());
        }

        return categoryExist;
    }
}
