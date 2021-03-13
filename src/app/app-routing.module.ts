import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'expense-list',
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
        path: 'register-user',
        loadChildren: () => import('./pages/register-user/register-user.module').then(m => m.RegisterUserPageModule)
    },
    {
        path: 'expense-report-list',
        loadChildren: () => import('./pages/expense-report-list/expense-report-list.module').then( m => m.ExpenseReportListPageModule)
    },
    {
        path: 'expense-report-view',
        loadChildren: () => import('./pages/expense-report-view/expense-report-view.module').then( m => m.ExpenseReportViewPageModule)
    },
    {
        path: 'expense-report-create',
        loadChildren: () => import('./pages/expense-report-create/expense-report-create.module').then( m => m.ExpenseReportCreatePageModule)
    },
    {
        path: 'expense-create',
        loadChildren: () => import('./pages/expense-create/expense-create.module').then( m => m.ExpenseCreatePageModule)
    },
    {
        path: 'expense-report-edit',
        loadChildren: () => import('./pages/expense-report-edit/expense-report-edit.module').then( m => m.ExpenseReportEditPageModule)
    },
    {
        path: 'expense-edit',
        loadChildren: () => import('./pages/expense-edit/expense-edit.module').then( m => m.ExpenseEditPageModule)
    },
    {
        path: 'users-list',
        loadChildren: () => import('./pages/users-list/users-list.module').then( m => m.UsersListPageModule)
    },
    {
        path: 'revisions-list',
        loadChildren: () => import('./pages/revisions-list/revisions-list.module').then( m => m.RevisionsListPageModule)
    },
    {
        path: 'revisions-edit',
        loadChildren: () => import('./pages/revisions-edit/revisions-edit.module').then( m => m.RevisionsEditPageModule)
    },
    {
        path: 'revisions-view',
        loadChildren: () => import('./pages/revisions-view/revisions-view.module').then( m => m.RevisionsViewPageModule)
    },
    {
        path: 'revisions-expense-view',
        loadChildren: () => import('./pages/revisions-expense-view/revisions-expense-view.module').then( m => m.RevisionsExpenseViewPageModule)
    },
    {
        path: 'users-create',
        loadChildren: () => import('./pages/users-create/users-create.module').then( m => m.UsersCreatePageModule)
    },
    {
        path: 'users-edit',
        loadChildren: () => import('./pages/users-edit/users-edit.module').then( m => m.UsersEditPageModule)
    },
    {
        path: 'expense-list',
        loadChildren: () => import('./pages/expense-list/expense-list.module').then( m => m.ExpenseListPageModule)
    },
  {
    path: 'expense-add-to-expense-report',
    loadChildren: () => import('./pages/expense-add-to-expense-report/expense-add-to-expense-report.module').then( m => m.ExpenseAddToExpenseReportPageModule)
  },
  {
    path: 'expense-add-to-expense-report',
    loadChildren: () => import('./pages/expense-add-to-expense-report/expense-add-to-expense-report.module').then( m => m.ExpenseAddToExpenseReportPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
