import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to running and count down', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('running');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);   // Confident, much?
    });

    it('should not let count to go below 0', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);
    });

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused')

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop countdown on stopped status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped')

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
