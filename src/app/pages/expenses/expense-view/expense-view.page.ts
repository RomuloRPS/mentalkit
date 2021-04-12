import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { forkJoin } from 'rxjs';
import { CategoryModel } from 'src/app/coloquent-model/category/category.model';
import { ExpenseReportModel, ExpenseReportStatusEnum } from 'src/app/coloquent-model/expense-report/expense-report.model';
import { ExpenseModel } from 'src/app/coloquent-model/expense/expense.model';
import { PolicyModel } from 'src/app/coloquent-model/policy/policy.model';
import { EvMediaPopoverComponent } from 'src/app/components/ev-media/ev-media-popover/ev-media-popover.component';
import { UserModel } from 'src/app/models/user.model';
import { DateTimeFormatPipe } from 'src/app/pipes/date-time-format.pipe';
import { CategoryService } from 'src/app/resources/category/category.service';
import { ExpenseReportRelations } from 'src/app/resources/expense-report/expense-report-relations';
import { ExpenseReportService } from 'src/app/resources/expense-report/expense-report.service';
import { ExpenseRelations } from 'src/app/resources/expense/expense-relations';
import { ExpenseService } from 'src/app/resources/expense/expense.service';
import { PolicyService } from 'src/app/resources/policy/policy.service';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { OfflineCacheService } from 'src/app/shared-services/offline-cache.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-expense-view',
    templateUrl: './expense-view.page.html',
    styleUrls: ['./expense-view.page.scss'],
})
export class ExpenseViewPage implements OnInit {
    @ViewChild('expenseForm', {static: false}) public expenseForm: NgForm;
    public expense: ExpenseModel;

    public category: CategoryModel;
    public selectedCategoryId;

    public expenseReport: ExpenseReportModel;
    public selectedExpenseReportId;

    public attachments = [];

    public filterCategory = {
        categoryFilterIds: null
    };

    public expenseReportFilter = {
        status: ExpenseReportStatusEnum.OPEN
    };

    public submitted = false;
    public date = new Date().toISOString();

    public editing;

    public  slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private expenseService: ExpenseService,
        public categoryService: CategoryService,
        public expenseReportService: ExpenseReportService,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private loadingService: LoadingService,
        private toasterService: ToasterService,
        private userModel: UserModel
    ) { }

    public ngOnInit() {
        this.route.paramMap.subscribe(async params => {
            this.submitted = false;
            this.userModel.load();

            if (params.get('id')) {
                let filters = {
                    id: params.get('id')
                };

                this.expenseService.onlyOffline().get(filters).subscribe((resp) => {
                    this.expense = resp.data[0];
                    this.editing = true;

                    if (resp.data[0]) {
                        this.date = this.expense.getAttribute('issue_date');

                        if (this.expense.getRelation('category')) {
                            this.category = this.expense.getRelation('category');
                            this.selectedCategoryId = this.expense.getRelation('category').getApiId();
                        }

                        if (this.expense.getRelation('expenseReport')) {
                            this.expenseReport = this.expense.getRelation('expenseReport');
                            this.selectedExpenseReportId = this.expense.getRelation('expenseReport').getApiId();
                        }
                    }
                });
            } else if (params.get('expense-report-id')) {
                let filters = {
                    id: params.get('expense-report-id')
                };

                this.expenseReportService.onlyOffline().get(filters).subscribe((resp) => {
                    this.expenseReport = resp.data[0];
                    this.selectedExpenseReportId = resp.data[0].getApiId();
                    this.expense = new ExpenseModel();
                    this.expense.setRelation('expenseReport', resp.data[0]);
                    this.editing = false;
                });
            } else {
                this.expense = new ExpenseModel();
                this.editing = false;
            }

            await this.cacheServices();
        });
    }

    public async cacheServices() {
        const servicesToCache = [
            this.categoryService.cache({
                page: {limit: 99999}
            }),
            this.expenseReportService.cache({
                include: ExpenseReportRelations,
                page: {limit: 99999}
            }),
        ];

        forkJoin(servicesToCache).toPromise().then((resp) => {
            console.log(resp);
        }).catch((error) => {
            console.log(error);
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
        if (this.expense.getRelation('expenseReport')) {
            if (this.expense.getRelation('expenseReport').getStatusLabel() == ExpenseReportStatusEnum.SENT) {
                this.router.navigate(['revision-view/' + this.expense.getRelation('expenseReport').getApiId()]);
            } else {
                this.router.navigate(['revision-view/' + this.expense.getRelation('expenseReport').getApiId()]);
            }
        } else {
            this.router.navigate(['despesas/update' + new Date().toISOString()]);
        }
    }

    public categoryChange(event) {
        this.expense.elementRelations.category = event;
    }

    public expenseReportChange(event) {
        this.expense.elementRelations.expenseReport = event;

        if (event && event.getRelation('policy') && event.getRelation('policy').getRelation('categories')) {
            const categoryIds = [];

            event.getRelation('policy').getRelation('categories').forEach(category => {
                categoryIds.push(category.getApiId());
            });

            this.filterCategory.categoryFilterIds = categoryIds;
        }
    }

    public isRequired(field) {
        if (this.expense.getRelation('expenseReport')) {
            if (this.expense.getRelation('expenseReport').getRelation('policy') && this.expense.getRelation('expenseReport').getRelation('policy').getRelation('requiredFields')) {
                return this.expense.getRelation('expenseReport').getRelation('policy').getRelation('requiredFields').getAttribute(field);
            }
        }
    }

    public save(form: NgForm) {
        this.submitted = true;

        if (form.valid) {
            this.loadingService.show('Salvando despesa');
            this.expense.elements.issue_date = (new DateTimeFormatPipe()).transform(this.date, 'yyyy-MM-dd HH:mm:ss');

            this.expense.save().then(() => {
                this.category = null;
                this.date = new Date().toISOString();
                this.updateInfos().then(() => {
                    this.submitted = false;
                    this.loadingService.dismiss();
                    this.next();
                }).catch((error) => {
                    this.submitted = false;
                    this.loadingService.dismiss();
                    this.next();
                });
            }).catch((error) => {
                this.loadingService.dismiss();
                this.toasterService.error('Não foi possível salvar as alterações!');
            });
        }
    }

    public create(form: NgForm) {
        this.submitted = true;

        if (form.valid) {
            this.loadingService.show('Criando despesa');
            this.expense.elements.attachments = this.attachments;
            this.expense.elements.avatar = this.attachments[0];
            this.expense.elements.from_app =
            this.expense.elements.issue_date = (new DateTimeFormatPipe()).transform(this.date, 'yyyy-MM-dd HH:mm:ss');
            this.expense.create().then(() => {
                this.submitted = false;
                this.category = null;
                this.date = new Date().toISOString();

                this.updateInfos().then(() => {
                    this.loadingService.dismiss();
                    this.next();
                }).catch((error) => {
                    this.loadingService.dismiss();
                    this.next();
                });
            }).catch((error) => {
                this.loadingService.dismiss();
                this.toasterService.error('Não foi possível criar despesa!');
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

    private next() {
        if (this.expense.getRelation('expenseReport')) {
            this.router.navigate(['expense-report-view/' + this.expense.getRelation('expenseReport').getApiId()]);
        } else {
            this.router.navigate(['despesas']);
        }
    }
}
