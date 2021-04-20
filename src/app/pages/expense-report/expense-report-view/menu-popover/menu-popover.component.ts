import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, LoadingController } from '@ionic/angular';
import { ExpenseReportModel } from 'src/app/coloquent-model/expense-report/expense-report.model';
import { ExpenseReportService } from 'src/app/resources/expense-report/expense-report.service';

@Component({
    selector: 'app-menu-popover',
    templateUrl: './menu-popover.component.html',
    styleUrls: ['./menu-popover.component.scss'],
})

export class ExpenseReportPopoverComponent implements OnInit {
  @Input() public expenseReport: ExpenseReportModel;

  public tenancies;

  public constructor(
    private router: Router,
    private popoverController: PopoverController,
    private expenseReportService: ExpenseReportService
  ) { }

  public ngOnInit() {

  }

  public deleteReport() {
      this.popoverController.dismiss().then(() => {
          this.expenseReportService.delete(this.expenseReport.getApiId()).then((resp) => {
              this.router.navigate(['expense-reports/update' + new Date().toISOString()]);
          });
      });
  }

  public edit() {
      this.popoverController.dismiss().then(() => {
          this.router.navigate(['expense-report-edit/' +  this.expenseReport.getApiId()]);
      });
  }
}
