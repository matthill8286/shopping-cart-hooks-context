import { formatPrice } from '../util';

describe('util', () => {
  describe('formatPrice()', () => {
    it('should by default return decimal separated by dot', () => {
      expect(formatPrice(10)).toEqual('10.00');
    });
    it('should by default return number to 2 decimal points', () => {
      expect(formatPrice(9.2345678765432)).toEqual('9.23');
    });
  });
});
