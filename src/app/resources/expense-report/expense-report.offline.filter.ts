import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseOfflineFilter } from '../base-offline-filter';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { PluralResponse } from 'coloquent';
import { ExpenseReportModel } from 'src/app/coloquent-model/expense-report/expense-report.model';

@Injectable()
export class ExpenseReportOfflineFilter extends BaseOfflineFilter {
    public filteredArray = [];
    private expensereportModel: ExpenseReportModel;

    public constructor(injector: Injector) {
        super(injector);
        this.expensereportModel = injector.get(ExpenseReportModel);
    }

    public apply(filters, response) {
        return new Observable((observer: Observer<any>) => {
            const pluralResponse = new PluralResponse(ExpenseReportModel.query().getQuery(), null, ExpenseReportModel, response);

            let data = pluralResponse.getData();

            this.filteredArray = data;

            if (filters) {
                if (filters.term) {
                    this.filteredArray = data.filter((expenseReport) => {
                        if (this.searchName(expenseReport, filters) !== -1) {
                            return expenseReport;
                        }

                        if (this.searchCostCenter(expenseReport, filters) !== -1) {
                            return expenseReport;
                        }

                        if (this.searchDepartment(expenseReport, filters) !== -1) {
                            return expenseReport;
                        }

                        if (this.searchPolicy(expenseReport, filters) !== -1) {
                            return expenseReport;
                        }
                    });
                }

                if(filters.menuFilters && filters.menuFilters.category) {
                    this.filteredArray = this.filteredArray.filter((expenseReport)  => {
                        if (expenseReport.getRelation('category')) {
                            let categoryExist = false;

                            if (expenseReport.getRelation('category').getApiId() == filters.menuFilters.category.getApiId()) {
                                categoryExist = true;
                            }

                            return categoryExist;
                        }
                    });
                }

                if(filters.menuFilters && filters.menuFilters.date) {
                    const today = new Date(filters.menuFilters.date).toISOString().split('T')[0];

                    this.filteredArray = this.filteredArray.filter((expenseReport)  => {
                        if (expenseReport.getAttribute('issue_date') === today) {
                            return expenseReport;
                        }
                    });
                }

                if(filters.menuFilters && filters.menuFilters.status) {
                    this.filteredArray = this.filteredArray.filter((expenseReport)  => {
                        if (expenseReport.getAttribute('status') === filters.menuFilters.status) {
                            return expenseReport;
                        }
                    });
                }

                if(filters.status && filters.status) {
                    this.filteredArray = this.filteredArray.filter((expenseReport)  => {
                        if (expenseReport.getAttribute('status') === filters.status) {
                            return expenseReport;
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

    private searchName(expenseReport, filters) {
        let name;
        let nameExist = -1;

        if (expenseReport && expenseReport.getAttribute('name')) {
            name = expenseReport.getAttribute('name').toLowerCase();

            return nameExist = name.indexOf(filters.term.toString().toLowerCase());
        }

        return nameExist;
    }

    private searchCostCenter(expenseReport, filters) {
        let costCenter;
        let costCenterExist = -1;

        if (expenseReport && expenseReport.getAttribute('costCenter')) {
            costCenter = expenseReport.getAttribute('costCenter').toLowerCase();

            return costCenterExist = costCenter.indexOf(filters.term.toString().toLowerCase());
        }

        return costCenterExist;
    }

    private searchDepartment(expenseReport, filters) {
        let departmentName;
        let departmentExist = -1;

        if (expenseReport && expenseReport.getRelation('department').getAttribute('name')) {
            departmentName = expenseReport.getRelation('department').getAttribute('name').toLowerCase();

            return departmentExist = departmentName.indexOf(filters.term.toString().toLowerCase());
        }

        return departmentExist;
    }

    private searchPolicy(expenseReport, filters) {
        let policyName;
        let policyExist = -1;

        if (expenseReport && expenseReport.getRelation('policy').getAttribute('name')) {
            policyName = expenseReport.getRelation('policy').getAttribute('name').toLowerCase();

            return policyExist = policyName.indexOf(filters.term.toString().toLowerCase());
        }

        return policyExist;
    }
}
