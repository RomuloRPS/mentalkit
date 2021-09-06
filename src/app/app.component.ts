import { Component, Injector } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { RoleService } from './services/role/role.service';
import { LogoutService } from './shared-services/logout/logout.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { GlobalInjector } from './helpers/injector/global-injector';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { FarmacologiaDescriptionPageRoutingModule } from './pages/farmacologia-description/farmacologia-description-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
  public dark = false;
  public user;

  public menus = [
      {
          name: 'Início',
          action: 'menu',
          icon: 'home',
          disabled: false
      },
      {
          name: 'Transtornos mentais na infância e adolescência',
          action: 'users',
          icon: 'circle',
          disabled: false
      },
      {
          name: 'Intervenções baseadas em evidências',
          action: 'news',
          icon: 'circle',
          disabled: true

      },
      {
          name: 'Aspectos Econômicos',
          action: 'solicitations',
          icon: 'circle',
          disabled: true

      },
      {
          name: 'Número de casos nas regiões brasileiras',
          action: 'solicitations',
          icon: 'circle',
          disabled: true

      },
      {
          name: 'Recursos disponíveis no território',
          action: 'solicitations',
          icon: 'circle',
          disabled: true

      }

  ];

  public constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private androidPermissions: AndroidPermissions,
    private logoutService: LogoutService,
    public roleService: RoleService,
    private screenOrientation: ScreenOrientation,
    private injector: Injector,
    private oneSignal: OneSignal,
  ) {
      this.initializeApp();
      GlobalInjector.injector = injector;
  }

  public initializeApp() {
      this.platform.ready().then(() => {
          if (this.platform.is('android')) {
              this.requestAllPermissions();
          }

          // set to landscape
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

          // Set your iOS Settings
          let iosSettings = {
              kOSSettingsKeyAutoPrompt: false,
              kOSSettingsKeyInAppLaunchURL: false
          };

          this.oneSignal.startInit(environment.oneSignalKey);

          this.oneSignal.handleNotificationOpened().subscribe((data) => {
              console.log('notificationOpenedCallback: ' + JSON.stringify(data));
          });

          this.oneSignal.getIds().then((data) => {
              localStorage.setItem('device_token', data.userId);
          }).catch((erro) => {
              localStorage.setItem('device_token', 'ManualGenerated');
          });

          this.oneSignal.iOSSettings(iosSettings);

          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

          this.oneSignal.endInit();

          // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
          this.oneSignal.promptForPushNotificationsWithUserResponse().then((accepted) => {
              console.log("User accepted notifications: " + accepted);
          });

          setInterval(() => {
              this.user = localStorage.getItem('user');
          }, 1000);
          this.splashScreen.hide();
      });
  }

  public logout() {
      this.logoutService.logout();
  }

  public hasMenus(role) {
      let hasMenu = false;

      role.getRelation('menus').forEach(menu => {
          if (menu.getAttribute('application_type') == 'WEB_APP') {
              hasMenu = true;
          }
      });

      return hasMenu;
  }

  public getIcon(menu) {
      return './assets/fontawesome/solid/' + menu.icon + '.svg';
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
