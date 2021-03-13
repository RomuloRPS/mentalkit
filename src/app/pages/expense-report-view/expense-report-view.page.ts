import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ExpenseReportPopoverComponent } from './menu-popover/menu-popover.component';

@Component({
    selector: 'app-expense-report-view',
    templateUrl: './expense-report-view.page.html',
    styleUrls: ['./expense-report-view.page.scss'],
})
export class ExpenseReportViewPage implements OnInit {
    public permissionType = 'user';
    public status = 'revision';

    public constructor(
      private router: Router,
      private popoverController: PopoverController
    ) {}

    public ngOnInit() {
        this.permissionType = localStorage.getItem('expense-report-permission-type');
        this.status = localStorage.getItem('expense-report-status');
    }

    public getColor() {
        return '#1acc8d';
    }

    public async openOptions(ev) {
        const popoverOptions = {
            component: ExpenseReportPopoverComponent,
            translucent: true,
            event: ev
        };

        const popover = await this.popoverController.create(popoverOptions);

        return await popover.present();
    }

    public toExpenseCreate() {
        localStorage.setItem('expense-group', 'true');
        localStorage.setItem('expense-last-page', 'report-view');

        this.router.navigate(['expense-create']);
    }

    public toReportList() {
        this.router.navigate(['expense-report-list']);
    }

    public toExpenseListAdd() {
        this.router.navigate(['expense-add-to-expense-report']);
    }

    public toExpenseEdit() {
        localStorage.setItem('lastpage', 'expense-report-view');

        this.router.navigate(['expense-edit']);
    }
}
