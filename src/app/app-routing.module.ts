import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'integration',
        loadChildren: () => import('./pages/integration/integration.module').then(m => m.IntegrationPageModule)
    },
    {
        path: 'menu',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
    },
    {
        path: 'register-user',
        loadChildren: () => import('./pages/register-user/register-user.module').then(m => m.RegisterUserPageModule)
    },
    {
        path: 'expense-reports',
        loadChildren: () => import('./pages/expense-report/expense-report-list/expense-report-list.module').then( m => m.ExpenseReportListPageModule)
    },
    {
        path: 'expense-reports/:update',
        loadChildren: () => import('./pages/expense-report/expense-report-list/expense-report-list.module').then( m => m.ExpenseReportListPageModule)
    },
    {
        path: 'expense-report-view/:id/:update',
        loadChildren: () => import('./pages/expense-report/expense-report-view/expense-report-view.module').then( m => m.ExpenseReportViewPageModule)
    },
    {
        path: 'expense-create',
        loadChildren: () => import('./pages/expenses/expense-edit/expense-edit.module').then( m => m.ExpenseEditPageModule)
    },
    {
        path: 'expense-create/:expense-report-id',
        loadChildren: () => import('./pages/expenses/expense-edit/expense-edit.module').then( m => m.ExpenseEditPageModule)
    },
    {
        path: 'expense-edit/:id',
        loadChildren: () => import('./pages/expenses/expense-edit/expense-edit.module').then( m => m.ExpenseEditPageModule)
    },
    {
        path: 'expense-view/:id',
        loadChildren: () => import('./pages/expenses/expense-view/expense-view.module').then( m => m.ExpenseViewPageModule)
    },
    {
        path: 'expense-report-edit/:id',
        loadChildren: () => import('./pages/expense-report/expense-report-edit/expense-report-edit.module').then( m => m.ExpenseReportEditPageModule)
    },
    {
        path: 'expense-report-create/:expense-ids',
        loadChildren: () => import('./pages/expense-report/expense-report-edit/expense-report-edit.module').then( m => m.ExpenseReportEditPageModule)
    },
    {
        path: 'expense-report-edit',
        loadChildren: () => import('./pages/expense-report/expense-report-edit/expense-report-edit.module').then( m => m.ExpenseReportEditPageModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./pages/users/users-list/users-list.module').then( m => m.UsersListPageModule)
    },
    {
        path: 'users/:update',
        loadChildren: () => import('./pages/users/users-list/users-list.module').then( m => m.UsersListPageModule)
    },
    {
        path: 'users-create',
        loadChildren: () => import('./pages/users/users-edit/users-edit.module').then( m => m.UsersEditPageModule)
    },
    {
        path: 'users-edit/:id',
        loadChildren: () => import('./pages/users/users-edit/users-edit.module').then( m => m.UsersEditPageModule)
    },
    {
        path: 'review',
        loadChildren: () => import('./pages/revisions/revisions-list/revisions-list.module').then( m => m.RevisionsListPageModule)
    },
    {
        path: 'revisions/:update',
        loadChildren: () => import('./pages/revisions/revisions-list/revisions-list.module').then( m => m.RevisionsListPageModule)
    },
    {
        path: 'revision-view/:id',
        loadChildren: () => import('./pages/revisions/revisions-view/revisions-view.module').then( m => m.RevisionViewPageModule)
    },
    {
        path: 'solicitations',
        loadChildren: () => import('./pages/expenses/expense-list/expense-list.module').then( m => m.ExpenseListPageModule)
    },
    {
        path: 'expenses/:update',
        loadChildren: () => import('./pages/expenses/expense-list/expense-list.module').then( m => m.ExpenseListPageModule)
    },
    {
        path: 'expense-add-to-expense-report',
        loadChildren: () => import('./pages/expense-add-to-expense-report/expense-add-to-expense-report.module').then( m => m.ExpenseAddToExpenseReportPageModule)
    },
    {
        path: 'expense-add-to-expense-report',
        loadChildren: () => import('./pages/expense-add-to-expense-report/expense-add-to-expense-report.module').then( m => m.ExpenseAddToExpenseReportPageModule)
    },
    {
        path: 'definition',
        loadChildren: () => import('./pages/definition/definition.module').then( m => m.DefinitionPageModule)
    },
    {
        path: 'prevalencia',
        loadChildren: () => import('./pages/prevalencia/prevalencia.module').then( m => m.PrevalenciaPageModule)
    },
    {
        path: 'interventions',
        loadChildren: () => import('./pages/interventions/interventions.module').then( m => m.InterventionsPageModule)
    },
    {
        path: 'farmacologia/:param',
        loadChildren: () => import('./pages/farmacologia/farmacologia.module').then( m => m.FarmacologiaPageModule)
    },
    {
        path: 'farmacologia-info',
        loadChildren: () => import('./pages/farmacologia-info/farmacologia-info.module').then( m => m.FarmacologiaInfoPageModule)
    },
    {
        path: 'farmacologia-description',
        loadChildren: () => import('./pages/farmacologia-description/farmacologia-description.module').then( m => m.FarmacologiaDescriptionPageModule)
    },
    {
        path: 'farmacologia-roi',
        loadChildren: () => import('./pages/farmacologia-roi/farmacologia-roi.module').then( m => m.FarmacologiaRoiPageModule)
    },
    {
        path: 'farmacologia-agrupado',
        loadChildren: () => import('./pages/farmacologia-agrupado/farmacologia-agrupado.module').then( m => m.FarmacologiaAgrupadoPageModule)
    },
    {
        path: 'custos-do-programa',
        loadChildren: () => import('./pages/custos-do-programa/custos-do-programa.module').then( m => m.CustosDoProgramaPageModule)
    },
    {
        path: 'outros-custos',
        loadChildren: () => import('./pages/outros-custos/outros-custos.module').then( m => m.OutrosCustosPageModule)
    },
    {
        path: 'outros-parametros',
        loadChildren: () => import('./pages/outros-parametros/outros-parametros.module').then( m => m.OutrosParametrosPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
