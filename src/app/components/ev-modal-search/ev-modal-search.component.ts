import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseResourceService } from 'src/app/resources/base-resource.service';

@Component({
    selector: 'app-ev-modal-search',
    templateUrl: './ev-modal-search.component.html',
    styleUrls: ['./ev-modal-search.component.scss'],
})
export class EvModalSearchComponent implements OnInit {
  @ViewChild('search', {static: false}) public search;

  @Input() public baseService: BaseResourceService;
  @Input() public filters;
  @Input() public resource;
  @Input() public showField;
  @Input() public indexField;
  @Input() public value;
  @Input() public selectTitle = "Selecione";
  @Input() public notFound = "Não Informar";

  public list = [];
  public listOriginal = [];
  public searchTerm;

  public listLength = 20;

  public constructor(
    private modalCtrl: ModalController
  ) { }

  public ngOnInit() {
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

  public getValues() {
      if (this.searchTerm.length >= 3) {
          this.listLength = 20;
          this.list = this.listOriginal.filter((value) => {
              const descriptionUpperCaseValue = value[this.showField].toLowerCase();
              const descriptionExist = descriptionUpperCaseValue.indexOf(this.searchTerm.toString().toLowerCase());

              let indexExist = -1;

              if (this.indexField) {
                  const indexUpperCaseValue = value[this.indexField].toLowerCase();

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
