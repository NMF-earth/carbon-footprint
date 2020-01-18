import { keys, map } from 'ramda';
import food from '../version';

test('All version keys should contain a valid number', () => {
  const versionKeys = keys(food);
  map((item: any) => expect(typeof versionKeys[item]).toBe('number'));
});
