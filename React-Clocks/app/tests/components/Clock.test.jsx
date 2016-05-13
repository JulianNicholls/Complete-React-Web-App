var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock     = require('Clock');

describe('Clock', () => {
  var clock = TestUtils.renderIntoDocument(<Clock />);

  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('formatSeconds', () => {
    it('should return the correct MM:SS for a number of seconds', () => {
      expect(clock.formatSeconds(615)).toBe('10:15');
    });

    it('should pad MM and SS when less than 10', () => {
      expect(clock.formatSeconds(65)).toBe('01:05');
    });
  });
});
