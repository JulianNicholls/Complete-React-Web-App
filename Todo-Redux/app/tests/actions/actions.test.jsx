import expect from 'expect';

import {setSearchText} from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = { type: 'SET_SEARCH_TEXT', searchText: 'dog' },
        resp   = setSearchText('dog');

    expect(resp).toEqual(action);
  });
});
