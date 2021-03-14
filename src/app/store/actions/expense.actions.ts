import { Action, createAction, props } from '@ngrx/store';
import { Expense } from 'src/app/shared/model/expense';

export enum ExpenseAction {
  LOAD_EXPENSE = '[Expense] Load Expenses',
  LOAD_EXPENSE_SUCCESS = '[Expense] Load Expense Success',
  LOAD_EXPENSE_FAILED = '[Expense] Load Expense Failed',
  SAVE_EXPENSE = '[Expense] Save Expense',
  SAVE_EXPENSE_SUCCESS = '[Expense] Save Expense Success',
  SAVE_EXPENSE_FAILED = '[Expense] Save Expense Failed'
}

export class LoadExpense implements Action {
  readonly type = ExpenseAction.LOAD_EXPENSE  
}

export class LoadExpenseSuccess implements Action {
  readonly type = ExpenseAction.LOAD_EXPENSE  
  constructor(public payload: {expenses: Expense[]}) {}
}

export class LoadExpenseFailed implements Action {
  readonly type = ExpenseAction.LOAD_EXPENSE  
  constructor(public payload: any) {}
}

export class SaveExpense implements Action {
  readonly type = ExpenseAction.SAVE_EXPENSE
  constructor(public payload: Expense) {}
}
export class SaveExpenseFailed implements Action {
  readonly type = ExpenseAction.SAVE_EXPENSE_FAILED
  constructor(public payload: any) {}
}

export type ExpnseActions = 
  | LoadExpense
  | LoadExpenseSuccess
  | LoadExpenseFailed
  | SaveExpense
  | SaveExpenseFailed

