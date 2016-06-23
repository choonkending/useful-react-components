import React, { Component } from 'react';

class SNode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x: cx, y: cy, ...restProps } = this.props;
    return <circle cx={cx} cy={cy} {...restProps} />;
  }
}

SNode.defaultProps = {
  x: 25,
  y: 25,
  r: 25,
  fill: "#fff",
  stroke: "#000"
};

export default SNode;

