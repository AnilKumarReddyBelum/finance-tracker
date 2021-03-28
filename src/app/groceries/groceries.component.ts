import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api/menuitem';
import {Expense} from '../shared/model/expense';
import {Store} from '@ngrx/store';
import {AppState} from '../store';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent implements OnInit {


  items: MenuItem[] = [];
  home!: MenuItem;
  groceries: Expense[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.groceries).subscribe(data => {
      console.log(data.groceries);
      this.groceries = data.groceries;
    });
  }
}
