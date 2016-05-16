import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('componentWillUpdate', () => {
    it('should set state to running and count up', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);

      timer.startTimer();

      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.countStatus).toBe('running');
        done();
      }, 1001);   // Confident, much?
    });

    it('should pause timer on paused status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);

      timer.startTimer();
      timer.handleStatusChange('paused')

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop timer on stopped status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);

      timer.startTimer();
      timer.handleStatusChange('stopped')

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countStatus).toBe('paused');
        done();
      }, 1001);
    });
  });
});
