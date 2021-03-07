import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { DialogService } from 'primeng/dynamicdialog';
import { AddIncomeComponent } from './add-income/add-income.component';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Income'}
      ];
      this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  addIncome() {
    this.dialogService.open(AddIncomeComponent, {
      header: 'New Income',
      width: '40%'
    });
  }



}
