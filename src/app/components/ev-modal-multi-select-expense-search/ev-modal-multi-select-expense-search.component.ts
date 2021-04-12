import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BaseResourceService } from 'src/app/resources/base-resource.service';

@Component({
    selector: 'app-ev-multi-select-expense-modal-search',
    templateUrl: './ev-modal-multi-select-expense-search.component.html',
    styleUrls: ['./ev-modal-multi-select-expense-search.component.scss'],
})
export class EvModalMultiSelectExpenseSearchComponent implements OnInit {
  @ViewChild('search', {static: false}) public search;

  @Input() public baseService: BaseResourceService;
  @Input() public filters;
  @Input() public selectTitle = "Selecione";

  public list = [];
  public listOriginal = [];
  public searchTerm;

  public selecteds;

  public listLength = 20;

  public constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  public ngOnInit() {
      this.baseService.onlyOffline().get(this.filters).subscribe((resp: any) => {
          this.list = resp.data.slice(0, 20);
          this.listOriginal = resp.data;

          this.checkItems();
      });
  }

  public checkItems() {
      this.list.forEach((item) => {
          this.checkIsSelected(item);
      });
  }

  public checkIsSelected(valueToCheck) {
      const valueIndex = this.list.findIndex((value) => value.getApiId() == valueToCheck.getApiId());

      if (this.selecteds) {
          this.selecteds.forEach(element => {
              if (element.getApiId() == valueToCheck.getApiId()) {
                  this.list[valueIndex].isChecked = true;
              }
          });
      }
  }

  public changeSelect(valueToCheck) {
      const valueIndex = this.selecteds.find(element => element.getApiId() == valueToCheck.getApiId());

      this.selecteds.splice(valueIndex, 1);
  }

  public getValues() {
      if (this.searchTerm.length >= 3) {
          this.listLength = 20;
          this.list = this.listOriginal.filter((value) => {
              const descriptionUpperCaseValue = value.getAttribute('name').toLowerCase();
              const descriptionExist = descriptionUpperCaseValue.indexOf(this.searchTerm.toString().toLowerCase());

              let indexExist = -1;

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

  public toExpenseView(id) {
      console.log(id);
      this.router.navigate(['expense-edit/' + id]);
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
