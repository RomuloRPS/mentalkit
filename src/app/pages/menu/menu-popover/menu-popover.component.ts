import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-menu-popover',
    templateUrl: './menu-popover.component.html',
    styleUrls: ['./menu-popover.component.scss'],
})

export class MenuPopoverComponent implements OnInit {
  public tenancies;

  public constructor(
    private router: Router,
    private popoverController: PopoverController,
    private loadingController: LoadingController,
  ) { }

  public ngOnInit() {
  }

  public logout() {
      this.popoverController.dismiss().then(() => {
          document.location.href = '/login';
      });
  }

  public viewAppHistory() {
      this.popoverController.dismiss();
      this.router.navigate(['action-history']);
  }

  public refresh() {
      this.popoverController.dismiss();
      this.presentLoading('Carregando...');
  }

  public changeCompany() {

  }

  public changeVehicle() {
  }

  public async presentLoading(text) {
      const loading = await this.loadingController.create({
          message: text
      });

      await loading.present();
  }
}
