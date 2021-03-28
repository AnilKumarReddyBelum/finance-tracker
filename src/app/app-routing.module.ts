import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'income', loadChildren: () => import('./income/income.module').then(m => m.IncomeModule) },
  { path: 'expense', loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule) },
  { path: 'bills', loadChildren: () => import('./bills/bills.module').then(m => m.BillsModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  {path: 'groceries', loadChildren: () => import('./groceries/groceries.module').then(m => m.GroceriesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
