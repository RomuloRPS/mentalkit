import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BaseModel } from 'src/app/coloquent-model/coloquent.model';
import { BaseResourceService } from 'src/app/resources/base-resource.service';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';

@Component({
    selector: 'app-ev-modal-search',
    templateUrl: './ev-modal-search.component.html',
    styleUrls: ['./ev-modal-search.component.scss'],
})
export class EvModalSearchComponent implements OnInit {
  @ViewChild('search', {static: false}) public search;

  @Input() public baseService: BaseResourceService;
  @Input() public baseModel: BaseModel;
  @Input() public filters;
  @Input() public resource;
  @Input() public showField;
  @Input() public indexField;
  @Input() public value;
  @Input() public translateValue = false;
  @Input() public translatePrefix;
  @Input() public selectTitle;
  @Input() public name = "Item";
  @Input() public creatable = true;
  @Input() public notFound = "Não Informar";

  public list = [];
  public listOriginal = [];
  public searchTerm;

  public listLength = 20;

  public constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private toasterService: ToasterService,
    private loadingService: LoadingService,
    private translate: TranslateService
  ) { }

  public ngOnInit() {
      if (!this.selectTitle) {
          this.selectTitle =  this.translate.instant('DEFAULT_SELECT_PLACEHOLDER');
      }

      if (!this.resource) {
          this.baseService.onlyOffline().get(this.filters).subscribe((resp: any) => {
              this.list = resp.data.slice(0, 20);
              this.listOriginal = resp.data;
          });
      } else if (this.resource) {
          this.listOriginal = this.resource;
          this.list = this.resource.slice(0, 20);
      }
  }

  public refresh() {
      this.baseService.cache().toPromise().then((resp) => {
          this.baseService.onlyOffline().get(this.filters).subscribe((resp: any) => {
              this.loadingService.dismiss();
              this.list = resp.data.slice(0, 20);
              this.listOriginal = resp.data;
          });
      }).catch(() => {
          this.toasterService.error(this.translate.instant('LOADING_ERROR') + ' ' + this.name);
          this.loadingService.dismiss();
      });
  }

  public getValues() {
      if (this.searchTerm.length >= 3) {
          this.listLength = 20;
          this.list = this.listOriginal.filter((value) => {
              const descriptionUpperCaseValue = value.getAttribute(this.showField).toLowerCase();
              const descriptionExist = descriptionUpperCaseValue.indexOf(this.searchTerm.toString().toLowerCase());

              let indexExist = -1;

              if (this.indexField) {
                  const indexUpperCaseValue = value.getAttribute(this.indexField).toLowerCase();

                  indexExist = indexUpperCaseValue.indexOf(this.searchTerm.toString().toLowerCase());
              }

              if (descriptionExist !== -1 || indexExist !== -1) {
                  return value;
              }
          });
          this.list.slice(0, this.listLength);
      } else if (this.searchTerm.length === 0) {
          this.list = this.listOriginal.slice(0, this.listLength);
      }
  }

  public setValue(value) {
      this.modalCtrl.dismiss(value);
  }

  public close() {
      this.modalCtrl.dismiss(null);
  }

  public clear() {
      this.modalCtrl.dismiss('clear');
  }

  public newItem() {
      this.presentNewPromptDisapproveExpense();
  }

  public async presentNewPromptDisapproveExpense() {
      let alert = await this.alertController.create({
          header: this.translate.instant('NEW_ITEM'),
          inputs: [
              {
                  name: 'value',
                  placeholder: this.name,
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
                      if (data.value) {
                          this.loadingService.show(this.translate.instant('CREATING') + ' ' + this.name);
                          this.baseModel.setAttribute(this.showField, data.value);
                          this.baseModel.create().then((resp) => {
                              this.refresh();
                          }).catch(() => {
                              this.loadingService.dismiss();

                              this.toasterService.error(this.translate.instant('CREATE_ERROR') + ' ' + this.name);
                          });
                      } else {
                          this.toasterService.error('Informe ' + this.name + ' para confirmar');
                      }
                  }
              }
          ]
      });

      return alert.present();
  }

  public loadMoreData(event) {
      setTimeout(() => {
          if (this.listLength < this.listOriginal.length) {
              this.listLength = this.listLength + 10;

              if (this.listLength > this.listOriginal.length) {
                  this.listLength = this.listLength - (this.listLength - this.listOriginal.length);
              }
          }

          this.list = this.listOriginal.slice(0, this.listLength);
          event.target.complete();

          if (this.listLength === this.listOriginal.length) {
              event.target.disabled = true;
          }
      }, 500);
  }
}
