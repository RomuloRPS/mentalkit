import { Component, OnInit, Input, Output, EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvModalSearchComponent } from '../ev-modal-search/ev-modal-search.component';
import { EvModalMultiSelectSearchComponent } from '../ev-modal-multi-select-search/ev-modal-multi-select-search.component';
import { EvModalMultiSelectExpenseSearchComponent } from '../ev-modal-multi-select-expense-search/ev-modal-multi-select-expense-search.component';
import { CompanyModel } from 'src/app/coloquent-model/company/company.model';

@Component({
    selector: 'app-ev-multi-select-expenses',
    templateUrl: './ev-multi-select-expenses.component.html',
    styleUrls: ['./ev-multi-select-expenses.component.scss'],
})
export class EvMultiSelectExpensesComponent implements OnInit {
  @Input() public inputName;
  @Input() public baseService;
  @Input() public valueId;
  @Input() public disabled;
  @Input() public filters;
  @Input() public placeholder;
  @Input() public icon;
  @Input() public iconColor;
  @Input() public showField;
  @Input() public indexField;
  @Input() public values = [];
  @Input() public invalid = false;

  @Output() public valueIdChange = new EventEmitter();
  @Output() public valueChange = new EventEmitter();

  public constructor(
    private modalController: ModalController,
    @Inject(LOCALE_ID) public locale,
  ) { }

  public ngOnInit() { }

  public getCurrency(expense) {
      if(expense) {
          return expense.getRelation('currency').getAttribute('code');
      }

      return CompanyModel.getStandardCurrency();
  }

  public async chooseOption() {
      if (!this.showField) {
          this.showField = "name";
      }

      const modalPage = await this.modalController.create({
          component: EvModalMultiSelectExpenseSearchComponent,
          componentProps: {
              baseService: this.baseService,
              filters: this.filters,
              selecteds: this.values,
          }
      });

      modalPage.onDidDismiss().then((resp: any) => {
          if (resp.data) {
              this.valueIdChange.emit(resp.data);
              this.values = resp.data;
              this.valueChange.emit(this.values);
          }
      });

      return await modalPage.present();
  }
}
