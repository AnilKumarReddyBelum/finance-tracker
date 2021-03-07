import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    SharedModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
