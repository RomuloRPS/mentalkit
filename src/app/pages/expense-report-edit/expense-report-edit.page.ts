import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-report-edit',
    templateUrl: './expense-report-edit.page.html',
    styleUrls: ['./expense-report-edit.page.scss'],
})
export class ExpenseReportEditPage implements OnInit {
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
}
