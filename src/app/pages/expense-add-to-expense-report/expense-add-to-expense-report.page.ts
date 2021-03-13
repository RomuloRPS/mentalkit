import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-add-to-expense-report',
    templateUrl: './expense-add-to-expense-report.page.html',
    styleUrls: ['./expense-add-to-expense-report.page.scss'],
})
export class ExpenseAddToExpenseReportPage implements OnInit {
    public constructor(
    private router: Router
    ) { }

    public ngOnInit() {
    }

    public toExpenseReportView() {
        localStorage.setItem('expense-report-status', 'open');
        this.router.navigate(['expense-report-view']);
    }

    public createExpenseReport() {
        this.router.navigate(['expense-report-create']);
    }

    public toExpenseView() {
        localStorage.setItem('expense-report-status', 'close');
        this.router.navigate(['expense-edit']);
    }
}
