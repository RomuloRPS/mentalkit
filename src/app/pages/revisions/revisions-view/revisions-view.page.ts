import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { ExpenseReportModel } from 'src/app/coloquent-model/expense-report/expense-report.model';
import { ExpenseReportService } from 'src/app/resources/expense-report/expense-report.service';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';

@Component({
    selector: 'app-revisions-view',
    templateUrl: './revisions-view.page.html',
    styleUrls: ['./revisions-view.page.scss'],
})
export class RevisionViewPage implements OnInit {
    public permissionType = 'user';
    public status = 'revision';

    public expenseReport: ExpenseReportModel;

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private expenseReportService: ExpenseReportService,
        private modalController: ModalController,
        private popoverController: PopoverController,
        private loadingService: LoadingService,
        private toasterService: ToasterService,
        private alertController: AlertController
    ) { }

    public ngOnInit() {
        this.permissionType = localStorage.getItem('expense-report-permission-type');
        this.status = 'open';

        this.route.paramMap.subscribe(params => {
            if (params.get('id')) {
                let filters = {
                    id: params.get('id')
                };

                this.expenseReportService.onlyOffline().get(filters).subscribe((resp) => {
                    this.expenseReport = resp.data[0];
                });
            }
        });
    }

    public getColor() {
        return '#1acc8d';
    }

    public approve() {
        this.expenseReportService.approveExpenseReport(this.expenseReport.getApiId()).then((resp) => {
            this.router.navigate(['revisions/update' + new Date().toISOString()]);
        });
    }

    public disapproveExpense(index, reason) {
        this.expenseReport.getRelation('expenses')[index].disapproved = true;
    }

    public approveExpense(index) {
        this.expenseReport.getRelation('expenses')[index].disapproved = false;
    }

    public notApprove() {
        this.presentPromptNotApproveText().then((resp) => {
            console.log(resp);
        }).catch((error) => {
            this.toasterService.error('Não foi possível não aprovar');
        });
    }

    public send(id) {
        this.expenseReportService.sendExpenseReport([id]);
        this.router.navigate(['informe-de-despesas/update' + new Date().toISOString()]);
    }

    public toExpenseListAdd() {
        this.router.navigate(['expense-add-to-expense-report']);
    }

    public toExpenseEdit(id) {
        this.router.navigate(['expense-view/' + id]);
    }

    public async presentPromptNotApproveText() {
        let alert = await this.alertController.create({
            header: 'Requisitar Edição do Informe?',
            subHeader: 'Ao requisitar a edição do informe, o restituidor que o criou deve modificar as despesas de acordo com as informações inseridas abaixo.',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Motivo',
                },
            ],
            buttons: [
                {

                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: data => {
                        let disapprovedExpenses = this.expenseReport.getRelation('expenses').filter(expense => expense.disapproved);

                        if (data.reason) {
                            this.expenseReportService.requestEditExpenseReport(this.expenseReport.getApiId(), data.reason, disapprovedExpenses).then((resp) => {
                                this.router.navigate(['revisions/update' + new Date().toISOString()]);
                            });
                        } else {
                            this.toasterService.error('Informe um motivo para confirmar');
                        }
                    }
                }
            ]
        });

        return alert.present();
    }

    public async presentPromptDisapproveExpense(index) {
        let alert = await this.alertController.create({
            header: 'Reprovar despesa',
            subHeader: 'Mensagem de reprovação da Despesa',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Mensagem',
                },
            ],
            buttons: [
                {

                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: data => {
                        if (data.reason) {
                            this.disapproveExpense(index, data.reason);
                        } else {
                            this.toasterService.error('Informe um motivo para confirmar');
                        }
                    }
                }
            ]
        });

        return alert.present();
    }
}
