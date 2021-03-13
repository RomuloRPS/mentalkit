import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.page.html',
    styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
    public constructor(private router: Router) { }

    public ngOnInit() {
    }

    public toExpenseReportView(user) {
        this.router.navigate(['users-edit']);
    }

    public toUserCreate() {
        this.router.navigate(['users-create']);
    }
}
