import { keys, map } from 'ramda';
import streaming from '../streaming';

test('All streaming keys should contain a valid number', () => {
  const streamingKeys = keys(streaming);
  map((item: any) => expect(typeof streamingKeys[item]).toBe('number'));
});
