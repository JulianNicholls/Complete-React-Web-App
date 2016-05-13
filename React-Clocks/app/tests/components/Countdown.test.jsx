var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to running and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('running');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);   // Confident, much?
    });

    it('should not let count to go below 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);

      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);   // Confident, much?
    });
  });
});
