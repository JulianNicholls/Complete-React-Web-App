import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock     from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={67} />);
    let $el   = $(ReactDOM.findDOMNode(clock));
    let text  = $el.find('.clock-text').text();

    it('should render clock to output', () => {
      expect(text).toBe('01:07');
    });
  });

  describe('formatSeconds', () => {
    let clock = TestUtils.renderIntoDocument(<Clock />);

    it('should return the correct MM:SS for a number of seconds', () => {
      expect(clock.formatSeconds(615)).toBe('10:15');
    });

    it('should pad MM and SS when less than 10', () => {
      expect(clock.formatSeconds(65)).toBe('01:05');
    });
  });
});
