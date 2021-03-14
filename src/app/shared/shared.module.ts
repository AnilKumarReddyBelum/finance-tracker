import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {MegaMenuModule} from 'primeng/megamenu';
import { ChartModule } from 'primeng/chart';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    DynamicDialogModule,
    MegaMenuModule,
    ChartModule,
    MenubarModule,
    CardModule,
    InputNumberModule,
    TableModule
  ],
  providers: [
    DialogService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    DynamicDialogModule,
    MegaMenuModule,
    ChartModule,
    MenubarModule,
    CardModule,
    InputNumberModule,
    TableModule
  ]
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        DialogService
      ]
    };
  }
}
