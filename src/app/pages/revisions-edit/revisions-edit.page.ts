import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-revisions-edit',
    templateUrl: './revisions-edit.page.html',
    styleUrls: ['./revisions-edit.page.scss'],
})
export class RevisionsEditPage implements OnInit {
    public constructor(
      private router: Router
    ) { }

    public ngOnInit() {
    }

    public toReportView() {
        this.router.navigate(['revisions-view']);
    }

    public toReportList() {
        this.router.navigate(['revisions-list']);
    }
}
