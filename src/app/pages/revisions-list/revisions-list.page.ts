import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-revisions-list',
    templateUrl: './revisions-list.page.html',
    styleUrls: ['./revisions-list.page.scss'],
})
export class RevisionsListPage implements OnInit {
    public constructor(
    private router: Router
    ) { }

    public ngOnInit() {
    }

    public toExpenseReportView(status) {
        localStorage.setItem('revisions-edit', status);
        this.router.navigate(['revisions-view']);
    }
}
