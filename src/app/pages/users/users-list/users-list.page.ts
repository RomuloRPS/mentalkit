import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserRelations } from 'src/app/resources/user/user-relations';
import { UserService } from 'src/app/resources/user/user.service';
import { OfflineCacheService } from 'src/app/shared-services/offline-cache.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.page.html',
    styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
    @ViewChild("search", { static: false }) public search: any;
    @ViewChild("infiniteScroll", { static: false }) public infiniteScroll: any;

    public users = [
        {
            name: "Romulo",
            type: 'Adminstrador'
        }
    ];

    public selecteds = [];
    public isSearchable = false;
    public listLength = 10;
    public searchTerm;
    public usersLength;
    public loadingFirstTime = true;
    public loading = true;

    public menuFilters = {
        role: null
    };

    public constructor(
        private router: Router,
        private userService: UserService,
        private cacheService: OfflineCacheService,
        private toasterService: ToasterService,
        private menuController: MenuController,
        private translateService: TranslateService
    ) { }

    public ngOnInit() {
        this.refresh();
        this.getUsersLength();
    }

    public toChoose() {
        this.router.navigate(['solicitations']);
    }

    public filter() {
        this.getUsers();
        this.menuController.close();
    }

    public clearFilters() {
        this.menuFilters = {
            role: null
        };

        this.getUsers();
        this.menuController.close();
    }

    public getUsers(searchTerm?) {
        const filter = {
            term: searchTerm,
            menuFilters: this.menuFilters,
            limit: this.listLength
        };

        this.userService.onlyOffline().get(filter).subscribe((resp) => {
            this.loadingFirstTime = false;
            this.users = resp.data;
            this.loading = false;
        });
    }

    public getUsersLength() {
        this.userService
            .onlyOffline()
            .get()
            .subscribe((resp) => {
                this.usersLength= resp.data.length;
            });
    }

    public doRefresh() {
        this.loading = true;
        this.refresh();
    }

    public refresh(event?) {
        const filter = {

        };

        this.clearSelect();

        // if (window.navigator.onLine) {
        //     this.cacheService
        //         .cacheOneServiceIncluded(this.userService, UserRelations, filter, null)
        //         .then((resp) => {
        //             if (event && event.target) {
        //                 event.target.complete();
        //             }

        this.loading = false;
        // this.getUsersLength();
        // this.getUsers();
        // .catch((error) => {
        //     this.loading = false;
        //     this.toasterService.error(this.translateService.instant('NOT_POSSIBLE_TO_UPDATE_THE_LIST'));
        //     this.getUsers();

        //     if (event && event.target) {
        //         event.target.complete();
        //     }
        // });
    }

    public checkBlur() {
        this.changeSearch();
    }

    public toUserEdit(id) {
        this.router.navigate(['users-edit' + '/' + id]);
    }

    public getIconUrl(token): string {
        return `${environment.api}/attachments/${token}/preview`;
    }

    public getRoleBadgeColor(roleName) {
        switch (roleName) {
            case 'ADMIN':
                return 'primary';
            case 'FINANCIAL':
                return 'warning';
            case 'REFUNDER':
                return 'secondary';
            case "APPROVING":
                return 'success';
        }
    }

    public getCardColor(task) {
        return task.selected ? "medium" : "";
    }

    public changeSearch() {
        this.isSearchable = !this.isSearchable;

        if (this.isSearchable) {
            this.search.setFocus();
            this.clearSelect();
        }
    }

    public clearSelect() {
        this.selecteds = [];
        this.users.map((task: any) => {
            if (task.selected) {
                task.selected = false;
            }

            return task;
        });
    }

    public openMenu() {
        this.menuController.open('filters');
    }

    public searchTask() {
        this.infiniteScroll.el.disabled = false;
        this.listLength = 10;

        if (this.searchTerm.length >= 3) {
            this.getUsers(this.searchTerm);
        }

        if (this.searchTerm.length === 0) {
            this.getUsers();
        }
    }

    public toExpenseReportView(user) {
        this.router.navigate(['users-edit']);
    }

    public toUserCreate() {
        this.router.navigate(['users-create']);
    }

    public loadMoreData(event) {
        this.listLength = this.listLength + 10;
        this.getUsers(this.searchTerm);

        setTimeout(() => {
            if (this.users.length < this.listLength) {
                event.target.disabled = true;
            }

            event.target.complete();
        }, 500);
    }
}
