import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from '../interceptors/jwt.interceptor';
import { CompanySelectorService } from './company-selector.service';
import { OfflineCacheService } from './offline-cache.service';
import { ResourcesModule } from '../resources/resources.module';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WorkerService } from './worker/worker.service';
import { ToasterService } from './toaster/toaster.service';
import { LoadingService } from './loading/loading.service';
import { OfflineWarningService } from './offline-warning/offline-warning.service';
import { EvComponentsModule } from '../components/ev-components';
import { AlertService } from './alert/alert.service';
import { ModalLoadingService } from './modal-loading/modal-loading.service';
import { ModalLoadingDataService } from './modal-loading/modal-loading-data.service';
import { GeolocationService } from './geolocation/geolocation.service';

@NgModule({
    imports: [
        HttpClientModule,
        ResourcesModule,
        EvComponentsModule
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JWTInterceptor,
            multi: true,
        },
        CompanySelectorService,
        OfflineCacheService,
        GeolocationService,
        LocationAccuracy,
        Geolocation,
        WorkerService,
        ToasterService,
        LoadingService,
        OfflineWarningService,
        AlertService,
        ModalLoadingService,
        ModalLoadingDataService
    ]

})
export class SharedServicesModule { }
