import * as fromExpense from './expense.actions';

describe('loadExpenses', () => {
  it('should return an action', () => {
    expect(fromExpense.loadExpenses().type).toBe('[Expense] Load Expenses');
  });
});
