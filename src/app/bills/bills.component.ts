import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  items!: MenuItem[];
    
    home!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Bills'}
  ];
  
  this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
