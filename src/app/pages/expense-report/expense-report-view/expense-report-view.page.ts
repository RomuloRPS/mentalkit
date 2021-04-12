import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ExpenseReportModel, ExpenseReportStatusEnum } from 'src/app/coloquent-model/expense-report/expense-report.model';
import { ExpenseModel } from 'src/app/coloquent-model/expense/expense.model';
import { EvModalMultiSelectExpenseSearchComponent } from 'src/app/components/ev-modal-multi-select-expense-search/ev-modal-multi-select-expense-search.component';
import { ExpenseReportRelations } from 'src/app/resources/expense-report/expense-report-relations';
import { ExpenseReportService } from 'src/app/resources/expense-report/expense-report.service';
import { ExpenseRelations } from 'src/app/resources/expense/expense-relations';
import { ExpenseService } from 'src/app/resources/expense/expense.service';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';
import { ExpenseReportPopoverComponent } from './menu-popover/menu-popover.component';

@Component({
    selector: 'app-expense-report-view',
    templateUrl: './expense-report-view.page.html',
    styleUrls: ['./expense-report-view.page.scss'],
})
export class ExpenseReportViewPage implements OnInit {
    public expenseReport: ExpenseReportModel;

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private expenseReportService: ExpenseReportService,
        private expensesService: ExpenseService,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private loadingService: LoadingService,
        private toasterService: ToasterService
    ) { }

    public ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (params.get('id')) {
                this.getExpenseReport(params.get('id'));
            }
        });
    }

    public getExpenseReport(id) {
        let filters = {
            id: id
        };

        this.expenseReportService.onlyOffline().get(filters).subscribe((resp) => {
            this.expenseReport = resp.data[0];

            console.log(resp.data);
        });
    }

    public async chooseExpenses() {
        const filters = {
            noExpenseReport: true,
            expenseReportId: this.expenseReport.getApiId()
        };
        const modalPage = await this.modalController.create({
            component: EvModalMultiSelectExpenseSearchComponent,
            componentProps: {
                baseService: this.expensesService,
                filters,
                selecteds: this.expenseReport.getRelation('expenses'),
            }
        });

        modalPage.onDidDismiss().then((resp: any) => {
            if (resp.data) {
                this.loadingService.show('Salvando informe de despesa');

                this.expenseReport.setRelation('expenses', resp.data);
                this.expenseReport.save().then((resp) => {
                    this.expenseReportService.cache({
                        include: ExpenseReportRelations,
                        page: {limit: 99999}
                    }).subscribe((resp) => {
                        this.getExpenseReport(this.expenseReport.getApiId());
                        this.loadingService.dismiss();
                    });
                }).catch((error) => {
                    this.loadingService.dismiss();
                    this.toasterService.error('Não foi possível salvar o informe de despesa');
                });
            }
        });

        return await modalPage.present();
    }

    public getColor() {
        return '#1acc8d';
    }

    public getCardColor(expense: ExpenseModel) {
        if (expense.getRelation('disapprovedExpense') && this.isApproved()) {
            return 'warning-light';
        }
    }

    public isApproved() {
        return this.expenseReport.getAttribute('status') == ExpenseReportStatusEnum.APPROVED
        || this.expenseReport.getAttribute('status') == ExpenseReportStatusEnum.APPROVED_WITH_EXCEPTIONS
        || this.expenseReport.getAttribute('status') == ExpenseReportStatusEnum.EDITION_REQUEST;
    }

    public isEditable() {
        if (this.expenseReport && (this.expenseReport.getAttribute('status') == ExpenseReportStatusEnum.EDITION_REQUEST || this.expenseReport.getAttribute('status') == ExpenseReportStatusEnum.OPEN)) {
            return true;
        }

        return false;
    }

    public async openOptions(ev) {
        const popoverOptions = {
            component: ExpenseReportPopoverComponent,
            componentProps: {
                expenseReport: this.expenseReport
            },
            translucent: true,
            event: ev
        };

        const popover = await this.popoverController.create(popoverOptions);

        return await popover.present();
    }

    public toExpenseCreate() {
        localStorage.setItem('expense-group', 'true');
        localStorage.setItem('expense-last-page', 'report-view');

        this.router.navigate(['expense-create/' + this.expenseReport.getApiId()]);
    }

    public send(id) {
        this.expenseReportService.sendExpenseReport([id]);
        this.router.navigate(['informe-de-despesas/update' + new Date().toISOString()]);
    }

    public toExpenseListAdd() {
        this.router.navigate(['expense-add-to-expense-report']);
    }

    public toExpenseEdit(id) {
        if (!this.isEditable()) {
            this.router.navigate(['expense-view/' + id]);
        } else {
            this.router.navigate(['expense-edit/' + id]);
        }
    }
}
