import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SaveExpense} from '../../store/actions/expense.actions';
import {Store} from '@ngrx/store';
import {ExpenseState} from '../../store/reducers/expense.reducer';
import {GroceryState} from '../../store/reducers/grocery.reducer';
import {SaveGrocery} from '../../store/actions/grocery.actions';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.scss']
})
export class AddGroceryComponent implements OnInit {

  groceryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<GroceryState>) {
  }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(): void {
    this.groceryForm = this.formBuilder.group({
      name: [''],
      price: ['']
    });
  }

  save(): void {
    const name = this.groceryForm.get('name')?.value;
    const price = this.groceryForm.get('price')?.value;
    const grocery = {
      name: name,
      price: price
    };
    console.log(JSON.stringify(grocery));
    this.store.dispatch(new SaveGrocery(grocery));
    this.groceryForm.reset();
  }

}
