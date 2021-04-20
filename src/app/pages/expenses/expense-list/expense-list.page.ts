import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { CategoryService } from 'src/app/resources/category/category.service';
import { ExpenseRelations } from 'src/app/resources/expense/expense-relations';
import { ExpenseService } from 'src/app/resources/expense/expense.service';
import { UserService } from 'src/app/resources/user/user.service';
import { OfflineCacheService } from 'src/app/shared-services/offline-cache.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';
import { environment } from 'src/environments/environment';
import { ExpenseListPopoverComponent } from './expense-list-popover/expense-list-popover.component';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.page.html',
    styleUrls: ['./expense-list.page.scss'],
})
export class ExpenseListPage implements OnInit {
    @ViewChild("search", { static: false }) public search: any;
    @ViewChild("infiniteScroll", { static: false }) public infiniteScroll: any;

    public selectOn;

    public expenses = [];
    public selecteds = [];
    public isSearchable = false;
    public listLength = 10;
    public searchTerm;
    public expensesLength;
    public loadingFirstTime = true;
    public loading = true;
    public selectedCategory;

    public menuFilters = {
        category: null,
        // date: new Date().toDateString()
    };

    public constructor(
        private router: Router,
        private expenseService: ExpenseService,
        private cacheService: OfflineCacheService,
        private toasterService: ToasterService,
        private menuController: MenuController,
        private popoverController: PopoverController,
        public categoryService: CategoryService
    ) { }

    public async openOptions(ev) {
        const popoverOptions = {
            component: ExpenseListPopoverComponent,
            componentProps: {
                selecteds: this.selecteds
            },
            translucent: true,
            event: ev
        };

        const popover = await this.popoverController.create(popoverOptions);

        popover.onDidDismiss().then((resp) => {
            if(resp && resp.data) {
                if (resp.data == 'delete') {
                    this.refresh();
                }
            }
        }).catch((error) => {
            console.log(error);
        });

        return await popover.present();
    }

    public setSelect(option) {
        this.selectOn = option;
    }

    public ngOnInit() {
        this.refresh();
        this.getExpensesLength();
    }

    public filter(event) {
        if (event && event.jsonApiType.split('/')[2] == 'categories') {
            this.menuFilters.category = event;
        }

        this.getExpenses();
        this.menuController.close();
    }

    public clearFilters() {
        this.menuFilters = {
            category: null,
            // date: new Date().toDateString(),
        };

        this.getExpenses();
        this.menuController.close();
    }

    public getExpenses(searchTerm?) {
        const filter = {
            term: searchTerm,
            menuFilters: this.menuFilters,
            limit: this.listLength,
            noExpenseReport: true
        };

        this.expenseService.onlyOffline().get(filter).subscribe((resp) => {
            this.loadingFirstTime = false;
            this.expenses = resp.data;
            console.log(resp.data);
            this.loading = false;
        });
    }

    public getExpensesLength() {
        this.expenseService
            .onlyOffline()
            .get()
            .subscribe((resp) => {
                this.expensesLength= resp.data.length;
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
                .cacheOneServiceIncluded(this.expenseService, ExpenseRelations, filter, null)
                .then((resp) => {
                    if (event && event.target) {
                        event.target.complete();
                    }

                    this.loading = false;
                    this.getExpensesLength();
                    this.getExpenses();
                })
                .catch((error) => {
                    this.loading = false;
                    this.toasterService.error('Não foi possível atualizar a lista de despesas!');
                    this.getExpenses();

                    if (event && event.target) {
                        event.target.complete();
                    }
                });
        } else {
            this.loading = false;
            this.toasterService.error('Não foi possível atualizar a lista de despesas!');
            this.getExpenses();

            if (event && event.target) {
                event.target.complete();
            }
        }
    }

    public checkBlur() {
        this.changeSearch();
    }

    public toExpenseEdit(id) {
        this.router.navigate(['expense-edit' + '/' + id]);
    }

    public trySelect(task) {
        if (this.selecteds.length == 0) {
            this.toExpenseEdit(task.getApiId());

            return;
        }

        if (task.selected && this.selecteds.length > 1) {
            this.removeSelectedTask(task);
        } else if(!task.selected) {
            this.selectTask(task);
        }
    }

    public selectTask(taskToSelect: any) {
        this.selecteds.push(taskToSelect);

        const taskIndex = this.expenses.findIndex(
            (task) => task.getApiId() == taskToSelect.id
        );

        this.expenses[taskIndex].selected = true;
    }

    public removeSelectedTask(taskToUnselect) {
        const selectedIndex = this.selecteds.findIndex(
            (task) => task.id == taskToUnselect.id
        );

        this.selecteds.splice(selectedIndex, 1);

        const taskIndex = this.expenses.findIndex(
            (task) => task.getApiId() == taskToUnselect.id
        );

        this.expenses[taskIndex].selected = false;
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
        this.expenses.map((task: any) => {
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

        this.expenses.forEach(task => {
            if (task.selected) {
                selectedTaskIds.push(task.getApiId());
            }
        });

        this.expenseService.delete(selectedTaskIds).then((resp) => {
            this.refresh();
        });
        this.loadingFirstTime = true;
    }

    public searchTask() {
        this.infiniteScroll.el.disabled = false;
        this.listLength = 10;

        if (this.searchTerm.length >= 3) {
            this.getExpenses(this.searchTerm);
        }

        if (this.searchTerm.length === 0) {
            this.getExpenses();
        }
    }

    public toExpenseCreate() {
        this.router.navigate(['expense-create']);
    }

    public loadMoreData(event) {
        this.listLength = this.listLength + 10;
        this.getExpenses(this.searchTerm);

        setTimeout(() => {
            if (this.expenses.length < this.listLength) {
                event.target.disabled = true;
            }

            event.target.complete();
        }, 500);
    }
}
