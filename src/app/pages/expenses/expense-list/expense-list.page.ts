import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ExpenseListPopoverComponent } from './expense-list-popover/expense-list-popover.component';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.page.html',
    styleUrls: ['./expense-list.page.scss'],
})
export class ExpenseListPage implements OnInit {
    public selectOn;

    public constructor(
    private router: Router,
    private popoverController: PopoverController
    ) { }

    public ngOnInit() {
    }

    public async openOptions(ev) {
        const popoverOptions = {
            component: ExpenseListPopoverComponent,
            translucent: true,
            event: ev
        };

        const popover = await this.popoverController.create(popoverOptions);

        return await popover.present();
    }

    public setSelect(option) {
        this.selectOn = option;
    }

    public toExpenseReportView(status) {
        localStorage.setItem('expense-report-status', status);
        this.router.navigate(['expense-report-view']);
    }

    public createExpenseReport() {
        this.router.navigate(['expense-report-create']);
    }

    public toExpenseCreate() {
        if (this.selectOn) {
            this.router.navigate(['expense-report-create']);
        } else {
            localStorage.setItem('expense-group', 'true');
            localStorage.setItem('expense-last-page', 'report-view');

            this.router.navigate(['expense-create']);
        }
    }

    public toReportList() {
        this.router.navigate(['expense-report-list']);
    }

    public toExpenseEdit() {
        if (!this.selectOn) {
            localStorage.setItem('expense-report-status', 'open');
            this.router.navigate(['expense-edit']);
        }
    }
}
