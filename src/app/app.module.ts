import { NgModule, Injector } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { PipesModule } from './pipes/pipes.module';
import { IonicGestureConfig } from './ionic-gesture-config';
import { AuthGuard } from './guards/auth.guard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SignaturePadModule } from 'angular2-signaturepad';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { CodePush } from '@ionic-native/code-push/ngx';
import { SharedServicesModule } from './shared-services/shared-services.module';
import { ModelsModule } from './models/models.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        PipesModule,
        SignaturePadModule,
        SharedServicesModule,
        ModelsModule.forRoot()
    ],
    providers: [
        CodePush,
        AuthGuard,
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        Keyboard,
        Camera,
        MediaCapture,
        AndroidPermissions,
        MediaCapture,
        BarcodeScanner,
        OneSignal,
        SQLite,
        ScreenOrientation,
        {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
