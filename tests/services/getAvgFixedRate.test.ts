import { BigNumber } from 'ethers';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getAvgFixedRate } from '../../src/services/getAvgFixedRate';

describe('average fixed rate calculator', () => {
  const tests: [string, [BigNumber, BigNumber], number][] = [
    ['test 1', [BigNumber.from('1000000'), BigNumber.from('200000')], 5],
    ['test 2', [BigNumber.from('200000'), BigNumber.from('1000000')], 0.2],
    ['test 3', [BigNumber.from('1000000000000000000'), BigNumber.from('200000000000000000')], 5],
    ['test 4', [BigNumber.from('200000000000000000'), BigNumber.from('1000000000000000000')], 0.2],
    ['test 5', [BigNumber.from('0'), BigNumber.from('1000000000000000000')], 0],
    ['test 6', [BigNumber.from('200000000000000000'), BigNumber.from('0')], 0],
  ];

  tests.forEach(([title, [unbalancedFixedTokens, variableTokens], result]) => {
    it(title, async () => {
      const avgFixedRate = getAvgFixedRate(unbalancedFixedTokens, variableTokens);

      expect(avgFixedRate).to.be.closeTo(result, 0.01);
    });
  });
});
