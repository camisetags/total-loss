import { switchCase, range } from '../../src/app/helpers/utils';

describe('Utils', () => {
  describe('sitchCase function', () => {
    it('should return function on first call', () => {
      const result = switchCase('a');

      expect(result).toBeInstanceOf(Function);
    });

    it('should return function on second call', () => {
      const result = switchCase('a')({
        a: () => ({ op: 'a' }),
        b: () => ({ op: 'b' }),
      });

      expect(result).toBeInstanceOf(Function);
    });

    it('should should initialize second call with plain object', () => {
      const result = switchCase('a')()(() => 'default');

      expect(result).toBe('default');
    });

    it('should behave like a switch case statement', () => {
      const result = switchCase('a')({
        a: () => ({ op: 'a' }),
        b: () => ({ op: 'b' }),
      })(() => ({}));

      expect(result).toEqual({ op: 'a' });
    });

    it('should return default case', () => {
      const result = switchCase('c')({
        a: () => ({ op: 'a' }),
        b: () => ({ op: 'b' }),
      })(() => 'default');

      expect(result).toEqual('default');
    });
  });

  describe('range funciton', () => {
    it('should return an array from 0 to selected element', () => {
      const result = range(3);

      expect(result).toEqual([0, 1, 2]);
    });
  });
});
