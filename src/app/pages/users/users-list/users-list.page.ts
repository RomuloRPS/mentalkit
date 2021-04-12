import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
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

    public users = [];
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
        private menuController: MenuController
    ) { }

    public ngOnInit() {
        this.refresh();
        this.getUsersLength();
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

        if (window.navigator.onLine) {
            this.cacheService
                .cacheOneServiceIncluded(this.userService, UserRelations, filter, null)
                .then((resp) => {
                    if (event && event.target) {
                        event.target.complete();
                    }

                    this.loading = false;
                    this.getUsersLength();
                    this.getUsers();
                })
                .catch((error) => {
                    this.loading = false;
                    this.toasterService.error('Não foi possível atualizar a lista usuários!');
                    this.getUsers();

                    if (event && event.target) {
                        event.target.complete();
                    }
                });
        } else {
            this.loading = false;
            this.toasterService.error('Não foi possível atualizar a lista usuários!');
            this.getUsers();

            if (event && event.target) {
                event.target.complete();
            }
        }
    }

    public checkBlur() {
        this.changeSearch();
    }

    public toUserEdit(id) {
        this.router.navigate(['users-edit' + '/' + id]);
    }

    public trySelect(user) {
        if (this.selecteds.length == 0) {
            this.toUserEdit(user.getApiId());

            return;
        }

        if (user.selected && this.selecteds.length > 1) {
            this.removeSelectedTask(user);
        } else if(!user.selected) {
            this.selectTask(user);
        }
    }

    public selectTask(taskToSelect: any) {
        this.selecteds.push(taskToSelect);

        const taskIndex = this.users.findIndex(
            (task) => task.getApiId() == taskToSelect.id
        );

        this.users[taskIndex].selected = true;
    }

    public removeSelectedTask(taskToUnselect) {
        const selectedIndex = this.selecteds.findIndex(
            (task) => task.id == taskToUnselect.id
        );

        this.selecteds.splice(selectedIndex, 1);

        const taskIndex = this.users.findIndex(
            (task) => task.getApiId() == taskToUnselect.id
        );

        this.users[taskIndex].selected = false;
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

    public triggerLongPress(taskToSelect) {
        if (!taskToSelect.selected) {
            this.selectTask(taskToSelect);
        } else if (taskToSelect.selected && this.selecteds.length == 1) {
            this.removeSelectedTask(taskToSelect);
        }
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

    public deleteUsers() {
        let selectedTaskIds = [];

        this.users.forEach(task => {
            if (task.selected) {
                selectedTaskIds.push(task.getApiId());
            }
        });

        this.userService.delete(selectedTaskIds).then((resp) => {
            this.refresh();
        });
        this.loadingFirstTime = true;
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
