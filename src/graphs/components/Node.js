import React, { Component, PropTypes } from 'react';

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.onOpen = this.onOpen.bind(this);
  }

  render() {
    const { cx, cy, r, bgColor } = this.props;
    return (
      <circle onClick={this.onOpen} r={r} cx={cx} cy={cy} fill={bgColor} />
    );
  }

  onOpen() {
    const { index, onOpen } = this.props;

    onOpen && onOpen(index);
  }
}

Node.propTypes = {
  index: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired
};

export default Node;

