import { keys, map } from 'ramda';
import purchase from '../purchase';
import { PurchaseType } from '../purchase.enum';

test('All purchase keys should contain a valid number', () => {
  const purchaseKeys = keys(purchase);
  map((item: number) => expect(typeof purchaseKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(PurchaseType).length;
  const defaultExportsCount = Object.keys(purchase).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
