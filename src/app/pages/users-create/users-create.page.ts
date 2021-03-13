import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.page.html',
    styleUrls: ['./users-create.page.scss'],
})
export class UsersCreatePage implements OnInit {
    public showImg = false;
    public constructor(
      private router: Router
    ) { }

    public ngOnInit() {
    }

    public showPhoto() {
        this.showImg = true;
    }

    public toReportView() {
        this.router.navigate(['users-list']);
    }

    public toReportList() {
        this.router.navigate(['users-list']);
    }
}
