import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-expense-create',
    templateUrl: './expense-create.page.html',
    styleUrls: ['./expense-create.page.scss'],
})
export class ExpenseCreatePage implements OnInit {
    public group;
    public showImg = false;

    public inform;

    public constructor(
      private router: Router
    ) { }

    public ngOnInit() {
        this.group = localStorage.getItem('expense-group');
    }

    public toReportView() {
        if (localStorage.getItem('expense-last-page') == 'menu') {
            this.router.navigate(['']);

            return;
        } else {
            this.router.navigate(['expense-report-view']);
        }
    }

    public toReportList() {
        this.router.navigate(['expense-report-list']);
    }

    public showPhoto() {
        this.showImg = true;
    }
}
