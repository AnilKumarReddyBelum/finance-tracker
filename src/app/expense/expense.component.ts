import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Expense'}
      ];
      this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
