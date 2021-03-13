import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.page.html',
    styleUrls: ['./users-edit.page.scss'],
})
export class UsersEditPage implements OnInit {
    public constructor(
    private router: Router
    ) { }

    public ngOnInit() {
    }

    public toReportView() {
        this.router.navigate(['users-list']);
    }

    public toReportList() {
        this.router.navigate(['users-list']);
    }
}
