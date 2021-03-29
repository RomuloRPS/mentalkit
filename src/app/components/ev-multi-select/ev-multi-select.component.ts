import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvModalSearchComponent } from '../ev-modal-search/ev-modal-search.component';
import { EvModalMultiSelectSearchComponent } from '../ev-modal-multi-select-search/ev-modal-multi-select-search.component';

@Component({
    selector: 'app-ev-multi-select',
    templateUrl: './ev-multi-select.component.html',
    styleUrls: ['./ev-multi-select.component.scss'],
})
export class EvMultiSelectComponent implements OnInit {
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
    private modalController: ModalController
  ) { }

  public ngOnInit() { }

  public async chooseOption() {
      if (!this.showField) {
          this.showField = "name";
      }

      const modalPage = await this.modalController.create({
          component: EvModalMultiSelectSearchComponent,
          componentProps: {
              baseService: this.baseService,
              filters: this.filters,
              selecteds: this.values,
              showField: this.showField,
              icon: this.icon,
              iconColor: this.iconColor
          }
      });

      modalPage.onDidDismiss().then((resp: any) => {
          if (resp.data) {
              this.valueIdChange.emit(resp.data.id);
              this.values = resp.data;
              this.valueChange.emit(this.values);
          }
      });

      return await modalPage.present();
  }
}
