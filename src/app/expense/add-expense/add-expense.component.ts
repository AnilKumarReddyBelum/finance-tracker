import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/shared/model/category';
import { SaveExpense } from 'src/app/store/actions/expense.actions';
import { ExpenseState } from 'src/app/store/reducers/expense.reducer';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  categories: Category[] = [];
  expenseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<ExpenseState>) { }

  ngOnInit(): void {
    this.categories = [{
      id: 1, name: 'Household'
    }];
    this.createForm();
  }

  createForm(): void {
    this.expenseForm = this.formBuilder.group({
      itemName: [''],
      amount: [''],
      category: [1],
      date: ['']    
    })
  }

  save(): void {
    const itemName = this.expenseForm.get('itemName')?.value;
    const amount = this.expenseForm.get('amount')?.value;
    const category = this.expenseForm.get('category')?.value;
    const date = this.expenseForm.get('date')?.value;
    const expense = {
      itemName: itemName,
      amount: amount,
      category: {id: 1, name: 'HouseHold'},
      date: date
    }; 
    this.store.dispatch(new SaveExpense(expense));   
    this.expenseForm.reset();
  }

}
