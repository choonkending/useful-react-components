import React, { Component } from 'react';
import MoveNode from './MoveNode';
import Node from './Node';
import { translate } from '../../utils/transformFn';
import { CENTER } from './contants';
import { centerPosition } from '../../utils/position';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.renderNodes = this.renderNodes.bind(this);
    this.onTransform = this.onTransform.bind(this);
    this.state = { transform : null };
  }

  render() {
    const { transform } = this.state;
    const { size } = this.props;
    const position = centerPosition(size);
    return (
      <g transform={transform}>
        <MoveNode {...size} onTransform={this.onTransform} />
        <Node {...position} {...size} />
      </g>
    );
  }

  renderNodes() {
    return this.props.nodes.map((node, i) => <Node key={i} {...node} />);
  }

  onTransform(transform) {
    this.setState({ transform });
  }
}

