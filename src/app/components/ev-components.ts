import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EvMediaComponent } from './ev-media/ev-media.component';
import { PipesModule } from '../pipes/pipes.module';
import { EvMediaShowComponent } from './ev-media-show/ev-media-show.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { EvMediaService } from './ev-media/ev-media.service';
import { RecorderService } from './ev-media/record.service';
import { File } from '@ionic-native/file/ngx';
import { Media } from '@ionic-native/media/ngx';
import { EvSelectComponent } from './ev-select/ev-select.component';
import { EvModalSearchComponent } from './ev-modal-search/ev-modal-search.component';
import { EvModalOfflineComponent } from './ev-modal-offline/ev-modal-offline.component';
import { EvModalLoadingComponent } from './ev-modal-loading/ev-modal-loading.component';
import { EvMultiSelectComponent } from './ev-multi-select/ev-multi-select.component';
import { EvModalMultiSelectSearchComponent } from './ev-modal-multi-select-search/ev-modal-multi-select-search.component';
import { EvLongPressComponent } from './ev-press/ev-long-press';
import { EvModalSignatureComponent } from './ev-modal-signature/ev-modal-signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { EvModalAppVersionComponent } from './ev-modal-app-version/ev-modal-app-version.component';
import { EvModalEloDocumentViewerComponent } from './ev-modal-elo-document-viewer/ev-modal-elo-document-viewer.component';
import { EvMediaPopoverComponent } from './ev-media/ev-media-popover/ev-media-popover.component';
import { HttpClientService } from '../services/http/http-client.service';
import { EvMediaPopoverColoquentComponent } from './ev-media/ev-media-popover-coloquent/ev-media-popover-coloquent.component';
import { EvMultiSelectExpensesComponent } from './ev-multi-select-expenses/ev-multi-select-expenses.component';
import { EvModalMultiSelectExpenseSearchComponent } from './ev-modal-multi-select-expense-search/ev-modal-multi-select-expense-search.component';
import { EvMediaViewComponent } from './ev-media/ev-media-view/ev-media-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ExpenseReportListIconsComponent } from './ev-expense-report-list-icons/ev-expense-report-list-icons.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        SignaturePadModule,
        PipesModule,
        TranslateModule
    ],
    declarations: [
        EvMediaComponent,
        EvMediaShowComponent,
        EvSelectComponent,
        EvMultiSelectComponent,
        EvModalSearchComponent,
        EvModalOfflineComponent,
        EvModalLoadingComponent,
        EvModalMultiSelectSearchComponent,
        EvLongPressComponent,
        EvModalSignatureComponent,
        EvModalAppVersionComponent,
        EvModalEloDocumentViewerComponent,
        EvMediaPopoverComponent,
        EvMediaPopoverColoquentComponent,
        EvMultiSelectExpensesComponent,
        EvModalMultiSelectExpenseSearchComponent,
        EvMediaViewComponent,
        ExpenseReportListIconsComponent
    ],
    entryComponents: [
        EvModalSearchComponent,
        EvModalOfflineComponent,
        EvModalLoadingComponent,
        EvModalMultiSelectSearchComponent,
        EvLongPressComponent,
        EvModalSignatureComponent,
        EvModalAppVersionComponent,
        EvModalEloDocumentViewerComponent,
        EvMediaPopoverComponent,
        EvMediaPopoverColoquentComponent,
        EvMultiSelectExpensesComponent,
        EvModalMultiSelectExpenseSearchComponent,
        EvMediaViewComponent,
        ExpenseReportListIconsComponent
    ],
    exports: [
        EvMediaComponent,
        EvMediaShowComponent,
        EvSelectComponent,
        EvMultiSelectComponent,
        EvModalSearchComponent,
        EvModalOfflineComponent,
        EvModalLoadingComponent,
        EvModalMultiSelectSearchComponent,
        EvLongPressComponent,
        EvModalEloDocumentViewerComponent,
        EvMediaPopoverComponent,
        EvMediaPopoverColoquentComponent,
        EvMultiSelectExpensesComponent,
        EvModalMultiSelectExpenseSearchComponent,
        EvMediaViewComponent,
        ExpenseReportListIconsComponent
    ],
    providers: [
        Keyboard,
        Camera,
        AndroidPermissions,
        EvMediaService,
        RecorderService,
        Media,
        File,
        HttpClientService
    ]
})
export class EvComponentsModule { }
