import { keys, map } from 'ramda';
import { food, FoodType } from '../';

test('All food keys should contain a valid number', () => {
  const foodKeys = keys(food);
  map((item: number) => expect(typeof foodKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(FoodType).length;
  const defaultExportsCount = Object.keys(food).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
