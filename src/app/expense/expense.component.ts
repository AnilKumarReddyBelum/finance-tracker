import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api/menuitem';
import { Expense } from '../shared/model/expense';
import { AppState } from '../store';
import { ExpenseState } from '../store/reducers/expense.reducer';
import { getExpenseList } from '../store/selectors/expense.selector';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  expenses: Expense[] = []; 
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(state => state.expenses).subscribe(data => {      
      console.log(data.expenses);
        this.expenses = data.expenses;
    });
  }

}
