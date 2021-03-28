import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {GroceriesComponent} from './groceries.component';
import {GroceriesRoutingModule} from './groceries-routing.module';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';


@NgModule({
  declarations: [GroceriesComponent, AddGroceryComponent, GroceryListComponent],
  imports: [
    SharedModule,
    GroceriesRoutingModule
  ]
})
export class GroceriesModule { }
