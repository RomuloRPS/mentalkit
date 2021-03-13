import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-revisions-view',
    templateUrl: './revisions-view.page.html',
    styleUrls: ['./revisions-view.page.scss'],
})
export class RevisionsViewPage implements OnInit {
  public status;
  public constructor(
      private router: Router
  ) { }

  public ngOnInit() {
  }

  public toRevisionEdit() {
      this.router.navigate(['revisions-edit']);
  }

  public toExpenseEdit() {
      this.router.navigate(['revisions-expense-view']);
  }
}
