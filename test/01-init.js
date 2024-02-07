/* eslint-env node, mocha */
/* eslint-disable require-jsdoc */

import { expect } from 'chai';
import { init } from '../src/index';

describe('init', () => {
  it('should return 0', () => {
    expect(init()).to.equal(0);
  });

  it("calculateDayBetweenDates should return 0", () => {
    const date1 = new Date("2020-01-01");
    const date2 = new Date("2020-01-01");
    expect(calculateDayBetweenDates(date1, date2)).to.equal(0);
  });

  it("calculateDayBetweenDates should return 1", () => {
    const date1 = new Date("2020-01-01");
    const date2 = new Date("2020-01-02");
    expect(calculateDayBetweenDates(date1, date2)).to.equal(1);
  });
});