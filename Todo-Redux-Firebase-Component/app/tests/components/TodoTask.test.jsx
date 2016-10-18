import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { TodoTask } from 'TodoTask';
import { startToggleTask, startRemoveTask } from 'actions';

describe('TodoTask', () => {
  it('should exist', () => {
    expect(TodoTask).toExist();
  });

  it('should dispatch startToggleTask action when a task is clicked', () => {
    let taskData = { id: 12, text: 'test calling', completed: false },
        action   = startToggleTask(taskData.id, !taskData.completed),
        spy      = expect.createSpy(),
        todotask = TestUtils.renderIntoDocument(<TodoTask {...taskData} dispatch={spy} />),
        $el      = $(ReactDOM.findDOMNode(todotask));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch startRemoveTask action when a task is clicked', () => {
    let taskData = { id: 12, text: 'test calling', completed: true, completedAt: 999 },
        action   = startRemoveTask(taskData.id),
        spy      = expect.createSpy(),
        todotask = TestUtils.renderIntoDocument(<TodoTask {...taskData} dispatch={spy} />),
        $el      = $(ReactDOM.findDOMNode(todotask)).find('.remove button');

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
