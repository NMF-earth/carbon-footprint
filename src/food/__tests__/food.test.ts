import { keys, map } from 'ramda';
import food from '../food';

test('All food keys should contain a valid number', () => {
  const foodKeys = keys(food);
  map((item: any) => expect(typeof foodKeys[item]).toBe('number'));
});
