import { NgModule } from '@angular/core';
import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { AddIncomeComponent } from './add-income/add-income.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IncomeComponent, AddIncomeComponent],
  imports: [
    SharedModule,     
    IncomeRoutingModule
  ],
  providers: [
    
  ]
})
export class IncomeModule { }
