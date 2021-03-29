import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-edit',
    templateUrl: './expense-edit.page.html',
    styleUrls: ['./expense-edit.page.scss'],
})
export class ExpenseEditPage implements OnInit {
    public status;
    public group;

    public constructor(
    private router: Router
    ) { }

    public ngOnInit() {
        this.status = localStorage.getItem('expense-report-status');
        this.group = localStorage.getItem('expense-group');
    }

    public toReportView() {
        if (localStorage.getItem('lastpage') == 'expense-list') {
            this.router.navigate(['expense-list']);

            return;
        }

        this.router.navigate(['expense-report-view']);
    }

    public toReportList() {
        this.router.navigate(['expense-report-view']);
    }
}
