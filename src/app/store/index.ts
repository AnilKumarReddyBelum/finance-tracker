import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { expenseReducer, ExpenseState, initialExpenseState } from './reducers/expense.reducer';
import {groceryReducer, GroceryState, initialGroceriesState} from './reducers/grocery.reducer';


export interface AppState {
  expenses: ExpenseState;
  groceries: GroceryState;
}

export const initialAppState: AppState = {
  expenses: initialExpenseState,
  groceries: initialGroceriesState
}

export const reducers: ActionReducerMap<AppState, any> = {
  expenses: expenseReducer,
  groceries: groceryReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
