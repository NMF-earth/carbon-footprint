import { keys, map } from 'ramda';
import purchase from '../purchase';

test('All purchase keys should contain a valid number', () => {
  const purchaseKeys = keys(purchase);
  map((item: number) => expect(typeof purchaseKeys[item]).toBe('number'));
});
