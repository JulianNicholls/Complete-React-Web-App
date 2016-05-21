import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {TodoTask} from 'TodoTask';

describe('TodoTask', () => {
  it('should exist', () => {
    expect(TodoTask).toExist();
  });

  it('should dispatch toggleTask action when a task is clicked', () => {
    let taskData = { id: 12, text: 'test calling', completed: false },
        spy      = expect.createSpy(),
        todotask = TestUtils.renderIntoDocument(<TodoTask {...taskData} dispatch={spy} />),
        $el      = $(ReactDOM.findDOMNode(todotask));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TASK',
      id:   taskData.id
    });
  });
});
