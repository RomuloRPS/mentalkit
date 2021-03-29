import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-menu-popover',
    templateUrl: './expense-list-popover.component.html',
    styleUrls: ['./expense-list-popover.component.scss'],
})

export class ExpenseListPopoverComponent implements OnInit {
  public tenancies;

  public constructor(
    private router: Router,
    private popoverController: PopoverController,
  ) { }

  public ngOnInit() {

  }

  public deleteReport() {
      this.popoverController.dismiss().then(() => {
          this.router.navigate(['expense-report-list']);
      });
  }

  public edit() {
      this.popoverController.dismiss().then(() => {
          this.router.navigate(['expense-report-create']);
      });
  }
}
