import { Injectable, Injector } from '@angular/core';
import { ExpenseReportOffline } from './expense-report.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class ExpenseReportHttp extends BaseResourceHttp {
  protected resourceUrl = 'tenancies/:tenancy_id/expense-reports';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(ExpenseReportOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }

  public send(ids) {
      const url = this.bindParams(this.resourceUrl);

      const data = {
          expense_report_ids: ids
      };

      return this.api.put(this.apiUrl + '/' + url + "/send-expense-report", data);
  }

  public approveExpenseReport(ids) {
      const url = this.bindParams(this.resourceUrl);

      const data = {
          expense_report_id: ids
      };

      return this.api.put(this.apiUrl + '/' + url + "/approving-process-expense-report", data);
  }

  public requestEditExpenseReport(ids, observation, disapproved_expenses = null) {
      const url = this.bindParams(this.resourceUrl);

      const data = {
          expense_report_id: ids,
          observation: observation,
          disapproved_expenses: disapproved_expenses
      };

      return this.api.put(this.apiUrl + '/' + url + "/request-edit-expense-report", data);
  }
}
