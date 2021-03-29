import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-report-create',
    templateUrl: './expense-report-create.page.html',
    styleUrls: ['./expense-report-create.page.scss'],
})
export class ExpenseReportCreatePage implements OnInit {
    public addAll = false;
    public constructor(
      private router: Router
    ) { }

    public ngOnInit() {
    }

    public toReportView() {
        localStorage.setItem('expense-report-status', 'open');
        this.router.navigate(['expense-report-view']);
    }

    public toReportList() {
        this.router.navigate(['expense-report-list']);
    }

    public toExpenseListAdd() {
        localStorage.setItem('last-expense-report', 'report-create');
        this.router.navigate(['expense-add-to-expense-report']);
    }
}
