import React, { Component } from 'react';
import Node from './Node';
import { translate } from '../../utils/transformFn';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.renderNodes = this.renderNodes.bind(this);
  }

  render() {
    const { position: { x, y } } = this.props;
    return (
      <g transform={translate(x, y)}>
        { this.renderNodes() }
      </g>
    );
  }

  renderNodes() {
    return this.props.nodes.map((node, i) => <Node key={i} {...node} />);
  }
}

