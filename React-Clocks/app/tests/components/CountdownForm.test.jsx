var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds are entered', () => {
    var spy   = expect.createSpy(),
        cform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />),
        $el   = $(ReactDOM.findDOMNode(cform));

    cform.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call onSetCountdown if nothing is entered', () => {
    var spy   = expect.createSpy(),
        cform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />),
        $el   = $(ReactDOM.findDOMNode(cform));

    cform.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should NOT call onSetCountdown if INvalid seconds are entered', () => {
    var spy   = expect.createSpy(),
        cform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />),
        $el   = $(ReactDOM.findDOMNode(cform));

    cform.refs.seconds.value = '10a';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
