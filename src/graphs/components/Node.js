import React, { Component, PropTypes } from 'react';
import RemoveButton from './RemoveButton';

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  render() {
    const { cx, cy, r, isActive, bgColor} = this.props;
    return (
      <g>
        <circle onClick={this.onOpen} r={r} cx={cx} cy={cy} fill={bgColor} />
        { isActive && <RemoveButton onClick={this.onClose} r="10" x={cx + 50 } y={cy} fill="#d23f31" /> }
      </g>
    );
  }

  onOpen() {
    const { index, onOpen } = this.props;
    onOpen && onOpen(index);
  }

  onClose() {
    this.props.onClose && this.props.onClose();
  }
}

Node.propTypes = {
  index: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  onOpen: PropTypes.func
};

export default Node;

