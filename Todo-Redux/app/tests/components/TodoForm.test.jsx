import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {TodoForm}  from 'TodoForm';

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should dispatch addTask if a valid task is entered', () => {
    let text    = 'Check mail',
        action  = { type: 'ADD_TASK', text },
        spy     = expect.createSpy(),
        cform   = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />),
        $el     = $(ReactDOM.findDOMNode(cform));

    cform.refs.taskText.value = text;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should NOT dispatch addTask if nothing is entered', () => {
    let spy   = expect.createSpy(),
        cform = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />),
        $el   = $(ReactDOM.findDOMNode(cform));

    cform.refs.taskText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
