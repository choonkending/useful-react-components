import React, { Component } from 'react';
import interactive from '../../interactive';

class Move extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x: cx, y: cy, transform, ...restProps } = this.props;
    return <circle cx={cx} cy={cy} {...restProps} />;
  }
}

Move.defaultProps = {
  x: 50,
  y: 50,
  r: 25,
  fill: "#1e90ff",
  stroke: "#000",
  strokeWidth: "8",
  style: {
    cursor: "move"
  }
};

export default interactive(Move);

