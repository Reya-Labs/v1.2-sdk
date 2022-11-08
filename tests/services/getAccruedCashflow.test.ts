import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ONE_WEEK_IN_SECONDS } from '../../src/constants';

import {
  addSwapsToCashflowInfo,
  DEFAULT_ADVANCED_CASHFLOW_INFO,
} from '../../src/services/getAccruedCashflow';

describe('accrued cashflow calculation', () => {
  it('no swaps', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [],
      apyGenerator: async () => 0.03,
      currentTime: 0,
      endTime: 0,
    });

    expect(info.time).to.be.closeTo(0, 0.01);
    expect(info.notional).to.be.closeTo(0, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(0, 0.01);
    expect(info.lockedCashflow.variable).to.be.closeTo(0, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(0, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(0, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(0, 0.01);
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(0, 0.01);
  });

  it('one swap (current < end)', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: 1000,
          avgFixedRate: 0.02,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 2 * ONE_WEEK_IN_SECONDS,
      endTime: 3 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(1000, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.02, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(0, 0.01);
    expect(info.lockedCashflow.variable).to.be.closeTo(0, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((-1000 * 7) / 365) * 0.02, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((1000 * 7) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(
      ((-1000 * 7) / 365) * 0.02,
      0.01,
    );
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((1000 * 7) / 365) * 0.03,
      0.01,
    );
  });

  it('one swap (current > end)', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: 1000,
          avgFixedRate: 0.02,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 4 * ONE_WEEK_IN_SECONDS,
      endTime: 3 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(1000, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.02, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(0, 0.01);
    expect(info.lockedCashflow.variable).to.be.closeTo(0, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((-1000 * 14) / 365) * 0.02, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((1000 * 14) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(0, 0.01);
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(0, 0.01);
  });

  it('two VT swaps', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: 1000,
          avgFixedRate: 0.02,
        },
        {
          time: 2 * ONE_WEEK_IN_SECONDS,
          notional: 1000,
          avgFixedRate: 0.025,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 3 * ONE_WEEK_IN_SECONDS,
      endTime: 4 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.closeTo(2 * ONE_WEEK_IN_SECONDS, 0.01);
    expect(info.notional).to.be.closeTo(2000, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.0225, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(((-1000 * 7) / 365) * 0.02, 0.01);
    expect(info.lockedCashflow.variable).to.be.closeTo(((1000 * 7) / 365) * 0.03, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((-2000 * 7) / 365) * 0.0225, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((2000 * 7) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(
      ((-2000 * 7) / 365) * 0.0225,
      0.01,
    );
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((2000 * 7) / 365) * 0.03,
      0.01,
    );
  });

  it('two FT swaps', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: -1000,
          avgFixedRate: 0.02,
        },
        {
          time: 2 * ONE_WEEK_IN_SECONDS,
          notional: -1000,
          avgFixedRate: 0.025,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 3 * ONE_WEEK_IN_SECONDS,
      endTime: 4 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(2 * ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(-2000, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.0225, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(((1000 * 7) / 365) * 0.02, 0.01);
    expect(info.lockedCashflow.variable).to.be.closeTo(((-1000 * 7) / 365) * 0.03, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((2000 * 7) / 365) * 0.0225, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((-2000 * 7) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(
      ((2000 * 7) / 365) * 0.0225,
      0.01,
    );
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((-2000 * 7) / 365) * 0.03,
      0.01,
    );
  });

  it('one VT, one partial unwind', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: 1000,
          avgFixedRate: 0.02,
        },
        {
          time: 2 * ONE_WEEK_IN_SECONDS,
          notional: -500,
          avgFixedRate: 0.025,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 3 * ONE_WEEK_IN_SECONDS,
      endTime: 4 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(500, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.02, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(
      ((-500 * 7) / 365) * 0.02 + (500 * 0.005 * 14) / 365,
      0.01,
    );
    expect(info.lockedCashflow.variable).to.be.closeTo(((500 * 7) / 365) * 0.03, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((-500 * 14) / 365) * 0.02, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((500 * 14) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(((-500 * 7) / 365) * 0.02, 0.01);
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((500 * 7) / 365) * 0.03,
      0.01,
    );
  });

  it('one VT, one bigger FT', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: 1000,
          avgFixedRate: 0.02,
        },
        {
          time: 2 * ONE_WEEK_IN_SECONDS,
          notional: -1500,
          avgFixedRate: 0.025,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 3 * ONE_WEEK_IN_SECONDS,
      endTime: 4 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(2 * ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(-500, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.025, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(
      ((-1000 * 7) / 365) * 0.02 + (1000 * 0.005 * 14) / 365,
      0.01,
    );
    expect(info.lockedCashflow.variable).to.be.closeTo(((1000 * 7) / 365) * 0.03, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((500 * 7) / 365) * 0.025, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((-500 * 7) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(((500 * 7) / 365) * 0.025, 0.01);
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((-500 * 7) / 365) * 0.03,
      0.01,
    );
  });

  it('one FT, one partial unwind', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: -1000,
          avgFixedRate: 0.02,
        },
        {
          time: 2 * ONE_WEEK_IN_SECONDS,
          notional: 500,
          avgFixedRate: 0.025,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 3 * ONE_WEEK_IN_SECONDS,
      endTime: 4 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(-500, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.02, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(
      ((500 * 7) / 365) * 0.02 + (-500 * 0.005 * 14) / 365,
      0.01,
    );
    expect(info.lockedCashflow.variable).to.be.closeTo(((-500 * 7) / 365) * 0.03, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((500 * 14) / 365) * 0.02, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((-500 * 14) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(((500 * 7) / 365) * 0.02, 0.01);
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((-500 * 7) / 365) * 0.03,
      0.01,
    );
  });

  it('one FT, one bigger VT', async () => {
    const info = await addSwapsToCashflowInfo({
      info: DEFAULT_ADVANCED_CASHFLOW_INFO,
      swaps: [
        {
          time: ONE_WEEK_IN_SECONDS,
          notional: -1000,
          avgFixedRate: 0.02,
        },
        {
          time: 2 * ONE_WEEK_IN_SECONDS,
          notional: 1500,
          avgFixedRate: 0.025,
        },
      ],
      apyGenerator: async () => 0.03,
      currentTime: 3 * ONE_WEEK_IN_SECONDS,
      endTime: 4 * ONE_WEEK_IN_SECONDS,
    });

    expect(info.time).to.be.eq(2 * ONE_WEEK_IN_SECONDS);
    expect(info.notional).to.be.closeTo(500, 0.01);
    expect(info.avgFixedRate).to.be.closeTo(0.025, 0.01);
    expect(info.lockedCashflow.fixed).to.be.closeTo(
      ((1000 * 7) / 365) * 0.02 + (-1000 * 0.005 * 14) / 365,
      0.01,
    );
    expect(info.lockedCashflow.variable).to.be.closeTo(((-1000 * 7) / 365) * 0.03, 0.01);
    expect(info.accruingCashflow.fixed).to.be.closeTo(((-500 * 7) / 365) * 0.025, 0.01);
    expect(info.accruingCashflow.variable).to.be.closeTo(((500 * 7) / 365) * 0.03, 0.01);
    expect(info.estimatedFutureCashflow(0.03).fixed).to.be.closeTo(
      ((-500 * 7) / 365) * 0.025,
      0.01,
    );
    expect(info.estimatedFutureCashflow(0.03).variable).to.be.closeTo(
      ((500 * 7) / 365) * 0.03,
      0.01,
    );
  });
});
