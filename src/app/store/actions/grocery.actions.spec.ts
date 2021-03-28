import * as fromGrocery from './grocery.actions';

describe('loadGrocerys', () => {
  it('should return an action', () => {
    expect(fromGrocery.loadGrocerys().type).toBe('[Grocery] Load Grocerys');
  });
});
