import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, LoadingController } from '@ionic/angular';
import { ExpenseModel } from 'src/app/coloquent-model/expense/expense.model';
import { ExpenseService } from 'src/app/resources/expense/expense.service';

@Component({
    selector: 'app-menu-popover',
    templateUrl: './expense-list-popover.component.html',
    styleUrls: ['./expense-list-popover.component.scss'],
})

export class ExpenseListPopoverComponent implements OnInit {
  public tenancies;
  public selecteds: Array<ExpenseModel>;

  public constructor(
    private router: Router,
    private popoverController: PopoverController,
    private expenseService: ExpenseService
  ) { }

  public ngOnInit() {
      console.log(this.selecteds);
  }

  public deleteReport() {
      const ids = this.selecteds.map((expense) => expense.getApiId());

      this.expenseService.delete(ids).then((resp) => {
          this.popoverController.dismiss('delete');
      });
  }

  public edit() {
      const expenseIds = this.selecteds.map((expense) => expense.getApiId())
;

      console.log(expenseIds);

      this.popoverController.dismiss().then(() => {
          this.router.navigate(['expense-report-create/' + JSON.stringify(expenseIds)]);
      });
  }
}
