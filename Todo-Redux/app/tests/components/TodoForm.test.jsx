import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoForm  from 'TodoForm';

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should call onNewTask if a valid task is entered', () => {
    let task  = 'Check mail',
        spy   = expect.createSpy(),
        cform = TestUtils.renderIntoDocument(<TodoForm onNewTask={spy} />),
        $el   = $(ReactDOM.findDOMNode(cform));

    cform.refs.task.value = task;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(task);
  });

  it('should NOT call onNewTask if nothing is entered', () => {
    let spy   = expect.createSpy(),
        cform = TestUtils.renderIntoDocument(<TodoForm onNewTask={spy} />),
        $el   = $(ReactDOM.findDOMNode(cform));

    cform.refs.task.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
