import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoTask from 'TodoTask';

describe('TodoTask', () => {
  it('should exist', () => {
    expect(TodoTask).toExist();
  });
});
