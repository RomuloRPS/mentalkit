import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-report-list',
    templateUrl: './expense-report-list.page.html',
    styleUrls: ['./expense-report-list.page.scss'],
})
export class ExpenseReportListPage implements OnInit {
    public constructor(
        private router: Router
    ) { }

    public ngOnInit() {
    }

    public toExpenseReportView(status) {
        localStorage.setItem('expense-report-status', status);
        this.router.navigate(['expense-report-view']);
    }

    public createExpenseReport() {
        this.router.navigate(['expense-report-create']);
    }
}
