import { NgModule, ModuleWithProviders } from '@angular/core';
import { BaseModel } from './base.model';
import { UserModel } from './user.model';
import { RouteModel } from './route.model';

@NgModule({
    declarations: [
    ],
    entryComponents: [],
    imports: [],
    exports: [
    ],
    bootstrap: []
})
export class ModelsModule {
    public static forRoot(): ModuleWithProviders<ModelsModule> {
        return {
            ngModule: ModelsModule,
            providers: [
                //Models
                BaseModel,
                UserModel,
                RouteModel
            ]
        };
    }
}
