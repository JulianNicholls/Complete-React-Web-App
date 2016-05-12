var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($("#error-modal"));

    modal.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="reveal small text-center" data-reveal="">
        <h4>An error has occurred</h4>
        <p>Error message goes here</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
