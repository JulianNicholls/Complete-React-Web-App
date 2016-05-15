import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render only Pause button when running', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="running" />),
          $el      = $(ReactDOM.findDOMNode(controls)),
          $pause   = $el.find('button:contains(Pause)'),
          $start   = $el.find('button:contains(Start)');

        expect($pause.length).toBe(1);  // Pause
        expect($start.length).toBe(0);  // no Start
    });

    it('should render only Start button when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />),
          $el      = $(ReactDOM.findDOMNode(controls)),
          $pause   = $el.find('button:contains(Pause)'),
          $start   = $el.find('button:contains(Start)');

        expect($pause.length).toBe(0);    // no Pause
        expect($start.length).toBe(1);    // Start
    });
  });
});
