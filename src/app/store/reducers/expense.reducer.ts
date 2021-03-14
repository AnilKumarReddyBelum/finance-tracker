import { Action, createReducer, on } from '@ngrx/store';
import { Expense } from 'src/app/shared/model/expense';
import { ExpenseAction, ExpnseActions } from '../actions/expense.actions';


export const expenseFeatureKey = 'expense';

export interface ExpenseState {
  expenses: Expense[];

}

export const initialExpenseState: ExpenseState = {
  expenses: []
};


export const expenseReducer = (state = initialExpenseState, action: ExpnseActions): ExpenseState => {
  switch(action.type) {
    
    case ExpenseAction.SAVE_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    }
    default:
      return state;
  }  
};

