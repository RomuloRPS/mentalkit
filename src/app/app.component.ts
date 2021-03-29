import { Component, Injector } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { environment } from 'src/environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { DatabaseService } from './worker/database/database.service';
import { CodePush, InstallMode } from '@ionic-native/code-push/ngx';
import { RoleService } from './services/role/role.service';
import { LogoutService } from './shared-services/logout/logout.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
  public dark = false;
  public user;

  public constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private androidPermissions: AndroidPermissions,
    private logoutService: LogoutService,
    public roleService: RoleService,
  ) {
      this.initializeApp();
  }

  public initializeApp() {
      this.platform.ready().then(() => {
          if (this.platform.is('android')) {
              this.requestAllPermissions();
          }

          this.roleService.updateRoles();

          setInterval(() => {
              this.user = localStorage.getItem('user');
          }, 1000);
          this.splashScreen.hide();
      });
  }

  public logout() {
      this.logoutService.logout();
  }

  public getIcon(menu) {
      return './assets/' + menu.getAttribute('icon') + '.svg';
  }

  public requestAllPermissions() {
      this.androidPermissions.requestPermissions(
          [
              this.androidPermissions.PERMISSION.CAMERA,
              this.androidPermissions.PERMISSION.RECORD_AUDIO,
              this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
              this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
              this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
              this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
          ]
      ).catch((error) => {
          console.log(error);
      });
  }
}
