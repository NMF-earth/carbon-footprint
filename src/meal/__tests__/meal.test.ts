import { keys, map } from 'ramda';
import { meal, MealType } from '../';

test('All meal keys should contain a valid number', () => {
  const foodKeys = keys(meal);
  map((item: number) => expect(typeof foodKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(MealType).length;
  const defaultExportsCount = Object.keys(meal).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
