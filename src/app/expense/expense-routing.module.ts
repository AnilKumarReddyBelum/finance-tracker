import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';

import { ExpenseComponent } from './expense.component';

const routes: Routes = [
  { path: '', component: ExpenseComponent , children: [
    { path: 'new', component: AddExpenseComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
