import { keys, map } from 'ramda';
import { transport, TransportType } from '../';

test('All transport keys should contain a valid number', () => {
  const transportKeys = keys(transport);
  map((item: number) => expect(typeof transportKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(TransportType).length;
  const defaultExportsCount = Object.keys(transport).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
