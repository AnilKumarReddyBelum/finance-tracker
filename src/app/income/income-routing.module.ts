import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIncomeComponent } from './add-income/add-income.component';

import { IncomeComponent } from './income.component';

const routes: Routes = [
  { path: '', component: IncomeComponent, children:[
    { path: 'new', component: AddIncomeComponent }
    ] 
}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
