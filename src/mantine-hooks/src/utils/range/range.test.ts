import { range } from './range';

describe('@mantine/hooks/range', () => {
  it('returns range between given numbers', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
