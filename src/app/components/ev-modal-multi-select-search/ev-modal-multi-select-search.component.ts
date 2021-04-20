import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { BaseResourceService } from 'src/app/resources/base-resource.service';

@Component({
    selector: 'app-ev-multi-select-modal-search',
    templateUrl: './ev-modal-multi-select-search.component.html',
    styleUrls: ['./ev-modal-multi-select-search.component.scss'],
})
export class EvModalMultiSelectSearchComponent implements OnInit {
  @ViewChild('search', {static: false}) public search;

  @Input() public baseService: BaseResourceService;
  @Input() public filters;
  @Input() public selectTitle;
  @Input() public showField;
  @Input() public indexField;
  @Input() public icon;
  @Input() public iconColor;

  public list = [];
  public listOriginal = [];
  public searchTerm;

  public creatable = false;

  public selecteds;

  public listLength = 20;

  public constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService
  ) { }

  public ngOnInit() {
      if (!this.selectTitle) {
          this.translate.get('DEFAULT_SELECT_PLACEHOLDER').subscribe((value) => {
              this.selectTitle = value;
          });
      }

      this.baseService.onlyOffline().get(this.filters).subscribe((resp: any) => {
          this.list = resp.data.slice(0, 20);
          this.listOriginal = resp.data;
      });
  }

  public checkIsSelected(valueToCheck) {
      const valueIndex = this.list.findIndex((value) => value.id == valueToCheck.id);

      if (this.selecteds) {
          this.selecteds.forEach(element => {
              if (element.id == valueToCheck.id) {
                  this.list[valueIndex].isChecked = true;
              }
          });
      }
  }

  public changeSelect(valueToCheck) {
      const valueIndex = this.selecteds.find(element => element.id == valueToCheck.id);

      this.selecteds.splice(valueIndex, 1);
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

  public setValues() {
      let selecteds= [];

      this.list.forEach(element => {
          if(element.isChecked) {
              selecteds.push(element);
          }
      });

      this.modalCtrl.dismiss(selecteds);
  }

  public close() {
      this.modalCtrl.dismiss(null);
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
