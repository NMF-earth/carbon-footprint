import { keys, map } from 'ramda';
import { streaming, StreamingType } from '../';

test('All streaming keys should contain a valid number', () => {
  const streamingKeys = keys(streaming);
  map((item: number) => expect(typeof streamingKeys[item]).toBe('number'));
});

test('Number of default exports equals number of enums', () => {
  const enumsCount = Object.keys(StreamingType).length;
  const defaultExportsCount = Object.keys(streaming).length;

  expect(defaultExportsCount).toEqual(enumsCount);
});
