import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Account',
        routerLink: ['/account']
      },
      {
          label: 'Income',
          items: [{
            label: 'New',
            routerLink: ['/income/new']
          },{
            label: 'View',
            routerLink: ['/income']
          }]
      },
      {
          label: 'Expense',
          items: [{
            label: 'New',
            routerLink: ['/expense/new']
          },{
            label: 'View',
            routerLink: ['/expense']
          }]
      },
      {
        label: 'Bills',
        items: [{
          label: 'New'
        },{
          label: 'View',
          routerLink: ['/bills']
        }]
      },
      {
        label: 'Reports',
        routerLink: ['/reports']
      },
      {
        label: 'Groceries',
        items: [{
            label: 'Add',
            routerLink: ['/groceries/add']
          },{
            label: 'View',
            routerLink: ['/groceries']
          }
        ]}
  ];
  }

}
