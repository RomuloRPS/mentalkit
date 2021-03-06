import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BaseModel } from 'src/app/coloquent-model/coloquent.model';
import { EvModalSearchComponent } from '../ev-modal-search/ev-modal-search.component';

@Component({
    selector: 'app-ev-select',
    templateUrl: './ev-select.component.html',
    styleUrls: ['./ev-select.component.scss'],
})
export class EvSelectComponent implements OnInit {
  @Input() public inputName;
  @Input() public baseService;
  @Input() public baseModel: BaseModel;
  @Input() public creatable;
  @Input() public name;
  @Input() public valueId;
  @Input() public disabled;
  @Input() public filters;
  @Input() public placeholder;
  @Input() public icon;
  @Input() public iconColor;
  @Input() public resource;
  @Input() public showField;
  @Input() public indexField;
  @Input() public translateValue = false;
  @Input() public translatePrefix;
  @Input() public value;
  @Output() public valueIdChange = new EventEmitter();
  @Output() public valueChange = new EventEmitter();

  public constructor(
    private modalController: ModalController,
    private translate: TranslateService
  ) { }

  public ngOnInit() { }

  public async chooseOption() {
      if (!this.showField) {
          this.showField = "name";
      }

      const modalPage = await this.modalController.create({
          component: EvModalSearchComponent,
          componentProps: {
              baseService: this.baseService,
              resource: this.resource,
              filters: this.filters,
              showField: this.showField,
              value: this.value,
              creatable: this.creatable,
              baseModel: this.baseModel,
              name: this.name,
              translateValue: this.translateValue,
              translatePrefix: this.translatePrefix,
              indexField: this.indexField
          }
      });

      modalPage.onDidDismiss().then((resp: any) => {
          if (resp.data) {
              if (resp.data == 'clear') {
                  this.valueIdChange.emit(null);
                  this.value = null;
                  this.valueChange.emit(this.value);

                  return;
              }

              this.valueIdChange.emit(resp.data.id);
              this.value = resp.data;
              this.valueChange.emit(this.value);
          }
      });

      return await modalPage.present();
  }
}
