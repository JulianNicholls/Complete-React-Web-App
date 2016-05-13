var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock     = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={67} />);
    var $el   = $(ReactDOM.findDOMNode(clock));
    var text  = $el.find('.clock-text').text();

    it('should render clock to output', () => {
      expect(text).toBe('01:07');
    });
  });

  describe('formatSeconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);

    it('should return the correct MM:SS for a number of seconds', () => {
      expect(clock.formatSeconds(615)).toBe('10:15');
    });

    it('should pad MM and SS when less than 10', () => {
      expect(clock.formatSeconds(65)).toBe('01:05');
    });
  });
});
