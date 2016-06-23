import React, { Component } from 'react';
import interactive from '../../interactive';
import provideControls from './provideControls';

class Node extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x: cx, y: cy, ...restProps } = this.props;
    return <circle cx={cx} cy={cy} {...restProps} />;
  }
}

Node.defaultProps = {
  x: 150,
  y: 50,
  r: 25,
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "8"
};

export { Node };
export default interactive(provideControls(Node));

