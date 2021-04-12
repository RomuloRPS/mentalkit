import { Component, Injector } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { RoleService } from './services/role/role.service';
import { LogoutService } from './shared-services/logout/logout.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

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
    private screenOrientation: ScreenOrientation
  ) {
      this.initializeApp();
  }

  public initializeApp() {
      this.platform.ready().then(() => {
          if (this.platform.is('android')) {
              this.requestAllPermissions();
          }

          // set to landscape
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

          this.roleService.updateRoles();

          setInterval(() => {
              this.user = localStorage.getItem('user');
          }, 1000);
          this.splashScreen.hide();
      });
  }

  public cacheApp() {

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
