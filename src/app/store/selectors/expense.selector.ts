import { createSelector } from '@ngrx/store';
import { AppState } from "..";
import { ExpenseState } from "../reducers/expense.reducer";


const expenses = (state: AppState) => state.expenses;

export const getExpenseList = createSelector(
    expenses,
    (state: ExpenseState) => state.expenses
);