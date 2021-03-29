import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvModalSearchComponent } from '../ev-modal-search/ev-modal-search.component';

@Component({
    selector: 'app-ev-select',
    templateUrl: './ev-select.component.html',
    styleUrls: ['./ev-select.component.scss'],
})
export class EvSelectComponent implements OnInit {
  @Input() public inputName;
  @Input() public baseService;
  @Input() public valueId;
  @Input() public disabled;
  @Input() public filters;
  @Input() public placeholder;
  @Input() public icon;
  @Input() public iconColor;
  @Input() public resource;
  @Input() public showField;
  @Input() public indexField;
  @Output() public valueIdChange = new EventEmitter();
  @Output() public valueChange = new EventEmitter();

  public value;

  public constructor(
    private modalController: ModalController
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
              showField: this.showField
          }
      });

      modalPage.onDidDismiss().then((resp: any) => {
          if (resp.data) {
              this.valueIdChange.emit(resp.data.id);
              this.value = resp.data;
              this.valueChange.emit(this.value);
          }
      });

      return await modalPage.present();
  }
}
