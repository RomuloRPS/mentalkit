import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { SingularResponse } from 'coloquent';
import { forkJoin } from 'rxjs';
import { CategoryModel } from 'src/app/coloquent-model/category/category.model';
import { CostCenterModel } from 'src/app/coloquent-model/cost-center/cost-center.model';
import { DepartmentModel } from 'src/app/coloquent-model/department/department.model';
import { ExpenseReportModel } from 'src/app/coloquent-model/expense-report/expense-report.model';
import { PolicyModel } from 'src/app/coloquent-model/policy/policy.model';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { EvMediaPopoverComponent } from 'src/app/components/ev-media/ev-media-popover/ev-media-popover.component';
import { UserModel } from 'src/app/models/user.model';
import { DateTimeFormatPipe } from 'src/app/pipes/date-time-format.pipe';
import { CostCenterService } from 'src/app/resources/cost-center/cost-center.service';
import { DepartmentService } from 'src/app/resources/department/department.service';
import { ExpenseReportRelations } from 'src/app/resources/expense-report/expense-report-relations';
import { ExpenseReportService } from 'src/app/resources/expense-report/expense-report.service';
import { ExpenseRelations } from 'src/app/resources/expense/expense-relations';
import { ExpenseService } from 'src/app/resources/expense/expense.service';
import { PolicyService } from 'src/app/resources/policy/policy.service';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';
import { UserService } from 'src/app/shared-services/user.service';

@Component({
    selector: 'app-expense-report-edit',
    templateUrl: './expense-report-edit.page.html',
    styleUrls: ['./expense-report-edit.page.scss'],
})
export class ExpenseReportEditPage implements OnInit {
    @ViewChild('expenseReportForm', {static: false}) public expenseReportForm: NgForm;
    public expenseReport: ExpenseReportModel;

    public policy: PolicyModel;
    public selectedPolicyId;

    public expenses: Array<PolicyModel>;
    public selectedExpenses;

    public department: DepartmentModel;
    public selectedDepartmentId;

    public costCenter: CostCenterModel;
    public selectedCostCenterId;

    public attachments = [];

    public expenseFilters= {
        noExpenseReport: true,
        expenseReportId: null
    };

    public selectedExpenseListId = [];

    public submitted = false;

    public editing;

    public  slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private expenseReportService: ExpenseReportService,
        public policyService: PolicyService,
        public departmentService: DepartmentService,
        public costCenterService: CostCenterService,
        public expenseService: ExpenseService,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private loadingService: LoadingService,
        private toasterService: ToasterService,
        private userService: UserService
    ) { }

    public ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.submitted = false;

            let user = this.userService.getUser();

            if (params.get('id')) {
                this.getExpenseReport(params.get('id'));
            } else if(params.get('expense-ids')) {
                if (user) {
                    this.getUserConfig(user);
                }

                this.findExpenses(JSON.parse(params.get('expense-ids')));
            } else {
                if (user) {
                    this.getUserConfig(user);
                }

                this.expenseReport = new ExpenseReportModel();
                this.editing = false;
            }
        });
    }

    public getUserConfig(user) {
        if (user.getRelation('department')) {
            this.setDepartment(user.getRelation('department'));
        }

        if (user.getRelation('costCenter')) {
            this.setCostCenter(user.getRelation('costCenter'));
        }
    }

    public getExpenseReport(id) {
        let filters = {
            id
        };

        this.expenseReportService.onlyOffline().get(filters).subscribe((resp) => {
            this.expenseReport = resp.data[0];
            this.editing = true;

            if (resp.data[0]) {
                this.setDepartment(this.expenseReport.getRelation('department'));
                this.setCostCenter(this.expenseReport.getRelation('costCenter'));

                this.policy = this.expenseReport.getRelation('policy');
                this.selectedPolicyId = this.expenseReport.getRelation('policy').getApiId();

                this.expenses = this.expenseReport.getRelation('expenses');

                this.expenseFilters.expenseReportId = this.expenseReport.getApiId();
            }
        });
    }

    public setDepartment(department) {
        this.department = department;
        this.selectedDepartmentId = department.getApiId();
    }

    public setCostCenter(costCenter) {
        this.costCenter = costCenter;
        this.selectedCostCenterId = costCenter.getApiId();
    }

    public findExpenses(expenseIds) {
        let filters = {
            expenseIds,
        };

        this.expenseService.onlyOffline().get(filters).subscribe((resp) => {
            this.expenseReport = new ExpenseReportModel();
            this.editing = false;

            this.expenses = resp.data;
            this.expenseReport.elementRelations.expenses = resp.data;
        });
    }

    public async openOptions(ev, index?) {
        let image;

        if (index || index == 0) {
            image = this.attachments[index];
        }

        const popoverOptions = {
            component: EvMediaPopoverComponent,
            translucent: true,
            event: ev,
            componentProps: {
                image
            }
        };

        const popover = await this.popoverController.create(popoverOptions);

        popover.onDidDismiss().then((resp: any) => {
            if (resp.data) {
                if (resp.data == 'delete') {
                    this.attachments.splice(index, 1);
                } else {
                    this.attachments.push(resp.data);
                }
            }
        });

        return await popover.present();
    }

    public backToList() {
        this.router.navigate(['despesas/update' + new Date().toISOString()]);
    }

    public selectPolicy(event) {
        this.expenseReport.elementRelations.policy = event;
    }

    public selectDepartment(event) {
        this.expenseReport.elementRelations.department = event;
    }

    public selectExpenses(event) {
        this.expenseReport.elementRelations.expenses = event;
        this.expenses = event;
    }

    public selectCostCenter(event) {
        this.expenseReport.elementRelations.costCenter = event;
    }

    public checkRequiredParams() {
        if (!this.expenseReport.getRelation('policy')) {
            return false;
        }

        return true;
    }

    public save(form: NgForm) {
        this.submitted = true;

        if (form.valid && this.checkRequiredParams()) {
            this.loadingService.show('Salvando informe de despesa');
            this.expenseReport.setRelation('currentExpenseReportState', null);
            this.expenseReport.save().then(() => {
                this.updateInfos().then(() => {
                    this.submitted = false;
                    this.loadingService.dismiss();
                    this.router.navigate(['informe-de-despesas/update' + new Date().toISOString()]);
                }).catch((error) => {
                    this.submitted = false;
                    this.loadingService.dismiss();
                    this.router.navigate(['informe-de-despesas/update' + new Date().toISOString()]);
                });
            }).catch((error) => {
                this.loadingService.dismiss();
                this.toasterService.error('Não foi possível salvar as alterações!');
            });
        }
    }

    public create(form: NgForm) {
        this.submitted = true;

        if (form.valid && this.checkRequiredParams()) {
            this.loadingService.show('Criando informe de despesa');
            // this.expenseReport.elements.attachments = this.attachments;
            // this.expenseReport.elements.avatar = this.attachments[0];
            // this.expenseReport.elements.from_app = true;

            this.expenseReport.create().then(() => {
                this.updateInfos().then(() => {
                    this.submitted = false;
                    this.loadingService.dismiss();
                    this.router.navigate(['informe-de-despesas/update' + new Date().toISOString()]);
                }).catch((error) => {
                    this.submitted = false;
                    this.loadingService.dismiss();
                    this.router.navigate(['informe-de-despesas/update' + new Date().toISOString()]);
                });
            }).catch((error) => {
                this.loadingService.dismiss();
                this.toasterService.error('Não foi possível criar informe de despesa!');
            });
        }
    }

    private updateInfos() {
        const servicesToCache = [
            this.expenseService.cache({
                include: ExpenseRelations,
                page: {limit: 99999}
            }),
            this.expenseReportService.cache({
                include: ExpenseReportRelations,
                page: {limit: 99999}
            }),
        ];

        return forkJoin(servicesToCache).toPromise();
    }
}
