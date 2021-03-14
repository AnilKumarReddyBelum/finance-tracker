import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';


@NgModule({
  declarations: [ExpenseComponent, AddExpenseComponent, ExpenseListComponent],
  imports: [
    SharedModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
