import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BillsRoutingModule } from './bills-routing.module';
import { BillsComponent } from './bills.component';


@NgModule({
  declarations: [BillsComponent],
  imports: [
    SharedModule,
    BillsRoutingModule
  ]
})
export class BillsModule { }
