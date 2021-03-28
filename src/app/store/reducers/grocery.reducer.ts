import {Action, createReducer, on} from '@ngrx/store';
import {Expense} from '../../shared/model/expense';
import {Grocery} from '../../shared/model/grocery';
import {GroceryAction, GroceryActions} from '../actions/grocery.actions';
import {ExpenseAction} from '../actions/expense.actions';


export const groceryFeatureKey = 'grocery';

export interface GroceryState {
  groceries: Grocery[];
}

export const initialGroceriesState: GroceryState = {
  groceries: []
};


export const groceryReducer = (state = initialGroceriesState, action: GroceryActions): GroceryState => {
  switch (action.type) {

    case GroceryAction.SAVE_GROCERY: {
      return {
        ...state,
        groceries: [...state.groceries, action.payload]
      }
    }
    default:
      return state;

  }
};
