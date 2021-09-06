import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ExpenseReportStatusEnum } from 'src/app/coloquent-model/expense-report/expense-report.model';
import { expenseReportStatusMeta, statusBadgeColors } from 'src/app/resources/expense-report/expense-report.meta';

@Component({
    selector: 'ev-expense-report-list-icons',
    templateUrl: './ev-expense-report-list-icons.component.html',
    styleUrls: ['./ev-expense-report-list-icons.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ExpenseReportListIconsComponent {
    @Input() public currentStatus: ExpenseReportStatusEnum = ExpenseReportStatusEnum.OPEN;

    public expenseReportStatusEnum = ExpenseReportStatusEnum;
    public statusBadgeColors = statusBadgeColors;

    public constructor() { }

    public getBadgeColor(status: ExpenseReportStatusEnum) {
        if (this.isCurrentStatus(status)) {
            return this.getBadgeColorByStatus(status);
        }

        return "text-gray-700";
    }

    public isCurrentStatus(status: ExpenseReportStatusEnum): boolean {
        return this.currentStatus == status;
    }

    public isPrevStatus(status: ExpenseReportStatusEnum): boolean {
        const statusIndex = expenseReportStatusMeta.findIndex((element) => element.value == status);
        const currentStatusIndex = expenseReportStatusMeta.findIndex((element) => element.value == this.currentStatus);

        return statusIndex < currentStatusIndex;
    }

    public isNextStatus(status: ExpenseReportStatusEnum): boolean {
        return !this.isCurrentStatus(status) && !this.isPrevStatus(status);
    }

    public getBadgeColorByStatus(status: ExpenseReportStatusEnum): string {
        return statusBadgeColors[status].replace('bg', 'text');
    }
}
