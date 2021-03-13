import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import { MenuPopoverComponent } from './menu-popover/menu-popover.component';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, AfterContentChecked {
  public user;
  public company;
  public menus;
  public transition;
  public collaborator;

  public userType;

  public constructor(
    public popoverController: PopoverController,
    private router: Router,
    private statusBar: StatusBar
  ) { }

  public ngAfterContentChecked() {

  }

  public ngOnInit() {
      this.userType = localStorage.getItem('user');
      this.statusBar.backgroundColorByHexString('#4a5568');
      this.transition = false;
      this.user = localStorage.getItem('user');

      let collaboratorId;

      if (this.collaborator && this.collaborator.id) {
          collaboratorId = this.collaborator.id;
      }

      this.menus = [
          {
              name: 'Informe de despesas',
              icon: 'elo-task',
              action: 'expense-report-list'
          }];

      if (this.user == 'revisador') {
          this.menus.push({
              name: 'Aprovar',
              icon: 'elo-check',
              action: 'revisions-list'
          });
      }

      if (this.user == 'admin') {
          this.menus.push({
              name: 'Aprovar',
              icon: 'elo-check',
              action: 'revisions-list'
          });

          this.menus.push({
              name: 'Usuários',
              icon: 'elo-user',
              action: 'users-list'
          });
      }
  }

  public toInventory() {
      this.router.navigate(['inventory']);
  }

  public async openOptions(ev) {
      const popoverOptions = {
          component: MenuPopoverComponent,
          translucent: true,
          event: ev
      };

      const popover = await this.popoverController.create(popoverOptions);

      return await popover.present();
  }

  public toPage(page) {
      this.transition = true;
      this.router.navigate([page]);
  }

  public toExpenseCreate() {
      localStorage.removeItem('expense-group');
      localStorage.setItem('expense-last-page', 'menu');
      this.router.navigate(['expense-create']);
  }

  public toIntegration() {
      this.transition = true;
      this.router.navigate(['integration']);
  }
}
