import { Component, OnInit } from '@angular/core';

import {MegaMenuItem, MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items!: MegaMenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Account',
        routerLink: ['/account']
      },
      {
          label: 'Income',
          routerLink: ['/income']         
      },
      {
          label: 'Expense',
          routerLink: ['/expense']          
      },
      {
        label: 'Bills',
        routerLink: ['/bills']
      },
      {
        label: 'Reports',
        routerLink: ['/reports']
      }
  ];
  }

}
