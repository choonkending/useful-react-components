import React, { Component } from 'react';

export default class DraggableCircle extends Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <circle {...this.props} />
      </svg>
    );
  }
}

DraggableCircle.defaultProps = {
  cx: 100,
  cy: 50,
  r: 25
};

