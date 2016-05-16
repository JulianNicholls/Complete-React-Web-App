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

  describe('handleStatusChange', () => {
    it('should set state to running and count up', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);

      timer.handleStatusChange('running');

      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.countStatus).toBe('running');
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);

      timer.setState({ count: 6 })
      timer.handleStatusChange('running');
      timer.handleStatusChange('paused')

      setTimeout(() => {
        expect(timer.state.count).toBe(6);
        expect(timer.state.countStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset timer on stopped status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);

      timer.handleStatusChange('running');
      timer.handleStatusChange('stopped')

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
