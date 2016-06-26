import React, { Component } from 'react';

const wrapWithSVG = ComposedComponent => class extends Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <ComposedComponent {...this.props} />
      </svg>
    );
  }
};

export default wrapWithSVG;

