import { DefaultMap } from './default-map';
import { describe, expect, it } from '@jest/globals';

describe('DefaultMap', () => {
  describe('get', () => {
    it('should get values store in map', () => {
      const map = DefaultMap<number, number>(0);
      map.set(1, 2);
      expect(map.get(1)).toBe(2);
    });

    it('should return default value if key is not within the map', () => {
      const map = DefaultMap<number, number>(0);
      expect(map.get(1)).toBe(0);
    });
  });
});
