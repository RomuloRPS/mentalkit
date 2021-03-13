import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
    {
        path: 'tablinks',
        component: TablinksPage,
        children: [
            {
                path: 'menu',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/menu/menu.module').then(m => m.MenuPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tablinks/menu',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tablinks/menu',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
