import { keys, map } from 'ramda';
import fashion from '../fashion';
import { FashionType } from '../fashion.enum';

test('All fashion keys should contain a valid number', () => {
  const purchaseKeys = keys(fashion);
  map((item: number) => expect(typeof purchaseKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(FashionType).length;
  const defaultExportsCount = Object.keys(fashion).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
