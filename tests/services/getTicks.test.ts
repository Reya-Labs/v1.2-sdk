import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getTicks } from '../../src/services/getTicks';

describe('tick formatter', () => {
  const tests: [string, [number, [number, number]], [number, number]][] = [
    ['test 1', [60, [1, 2.01]], [-6960, 0]],
    ['test 2', [100, [1, 2.01]], [-7000, 0]],
    ['test 3', [60, [0.49, 2.01]], [-6960, 7140]],
  ];

  tests.forEach(([title, [tickSpacing, [fixedLow, fixedHigh]], result]) => {
    it(title, async () => {
      const [tickLower, tickUpper] = getTicks(tickSpacing)([fixedLow, fixedHigh]);

      expect(tickLower).to.be.eq(result[0]);
      expect(tickUpper).to.be.eq(result[1]);
    });
  });
});
