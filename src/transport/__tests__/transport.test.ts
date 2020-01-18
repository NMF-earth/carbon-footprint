import { keys, map } from 'ramda';
import food from '../transport';

test('All transport keys should contain a valid number', () => {
  const transportKeys = keys(food);
  map((item: any) => expect(typeof transportKeys[item]).toBe('number'));
});
