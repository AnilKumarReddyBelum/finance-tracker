import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  myFinData: any;
  constructor() { }

  ngOnInit(): void {
    this.myFinData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
          {
              label: 'Income',
              backgroundColor: '#42A5F5',
              data: [1000, 1000, 1000, 2000, 1500, 3000 ]
          },
          {
            label: 'Expense',
            backgroundColor: '#FF0000',
            data: [500, 750, 520, 500, 490, 510]
          },
          {
            label: 'Saving',
            backgroundColor: '#008000',
            data: [500, 250, 480, 1500, 1010, 2490]
          }
      ]      
  };
  this.items = [
    {label: 'Account'}
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
