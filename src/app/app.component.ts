import { Component, Injector } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { environment } from 'src/environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { DatabaseService } from './worker/database/database.service';
import { CodePush, InstallMode } from '@ionic-native/code-push/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
  public dark = false;

  public aferidor = [
      { title: 'Despesas', url: '/expense-list', icon: 'cash' },
      { title: 'Informe de Despesas', url: 'expense-report-list', icon: 'list' }
  ];

  public aprovador = [
      { title: 'Revisão', url: '/revisions-list', icon: 'checkmark-circle' },
  ];

  public admin = [
      { title: 'Usuários', url: '/users-list', icon: 'people' }
  ];

  public labels = ['', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public user;

  public constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private androidPermissions: AndroidPermissions,
  ) {
      this.initializeApp();
  }

  public initializeApp() {
      this.platform.ready().then(() => {
          if (this.platform.is('android')) {
              this.requestAllPermissions();
          }

          setInterval(() => {
              this.user = localStorage.getItem('user');
          }, 1000);
          this.splashScreen.hide();
      });
  }

  public logout() {
      document.location.href = '/login';
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
