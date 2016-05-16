import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoEntry from 'TodoEntry';

describe('TodoEntry', () => {
  it('should exist', () => {
    expect(TodoEntry).toExist();
  });
});
