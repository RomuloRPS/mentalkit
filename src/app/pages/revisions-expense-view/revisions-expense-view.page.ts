import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-revisions-expense-view',
    templateUrl: './revisions-expense-view.page.html',
    styleUrls: ['./revisions-expense-view.page.scss'],
})
export class RevisionsExpenseViewPage implements OnInit {
    public constructor(
    private router: Router
    ) { }

    public ngOnInit() {
    }

    public toReportView() {
        this.router.navigate(['revisions-view']);
    }

    public toReportList() {
        this.router.navigate(['revisions-view']);
    }
}
