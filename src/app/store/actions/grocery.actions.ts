import {Action, createAction, props} from '@ngrx/store';
import {Grocery} from '../../shared/model/grocery';

export enum GroceryAction {
  LOAD_GROCERIES = '[Grocery] Load Groceries',
  LOAD_GROCERIES_SUCCESS= '[Grocery] Load Groceries Success',
  LOAD_GROCERIES_FAILED = '[Grocery] Load Groceries Failure',
  SAVE_GROCERY = '[Grocery] Save Grocery',
  SAVE_GROCERY_SUCCESS = '[Grocery] Save Grocery Success',
  SAVE_GROCERY_FAILED = '[Grocery] Save Grocery Failed'
}

export class LoadGrocery implements Action {
  readonly type = GroceryAction.LOAD_GROCERIES
}

export class LoadGrocerySuccess implements Action {
  readonly type = GroceryAction.LOAD_GROCERIES
  constructor(public payload: {expenses: Grocery[]}) {}
}

export class LoadGroceryFailed implements Action {
  readonly type = GroceryAction.LOAD_GROCERIES
  constructor(public payload: any) {}
}

export class SaveGrocery implements Action {
  readonly type = GroceryAction.SAVE_GROCERY
  constructor(public payload: Grocery) {}
}
export class SaveGroceryFailed implements Action {
  readonly type = GroceryAction.SAVE_GROCERY_FAILED
  constructor(public payload: any) {}
}

export type GroceryActions =
  | LoadGrocery
  | LoadGrocerySuccess
  | LoadGroceryFailed
  | SaveGrocery
  | SaveGroceryFailed

