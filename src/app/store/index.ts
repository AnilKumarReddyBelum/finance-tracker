import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { expenseReducer, ExpenseState, initialExpenseState } from './reducers/expense.reducer';


export interface AppState {
  expenses: ExpenseState
}

export const initialAppState: AppState = {
  expenses: initialExpenseState
}

export const reducers: ActionReducerMap<AppState, any> = {
  expenses: expenseReducer

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
