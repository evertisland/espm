import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <button className="button">
        Buy, {this.props.name}!
      </button>
    );
  }
});
