import { keys, map } from 'ramda';
import { electricity, ElectricityType } from '../';

test('All electricity keys should contain a valid number', () => {
  const electricityKeys = keys(electricity);
  map((item: number) => expect(typeof electricityKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(ElectricityType).length;
  const defaultExportsCount = Object.keys(electricity).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
