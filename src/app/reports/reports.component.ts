import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Reports'}
      ];
      this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
