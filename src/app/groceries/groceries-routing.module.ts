import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroceriesComponent} from './groceries.component';
import {AddGroceryComponent} from './add-grocery/add-grocery.component';

const routes: Routes = [{ path: '', component: GroceriesComponent, children:[
    { path: 'add', component: AddGroceryComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceriesRoutingModule { }
