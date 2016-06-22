import React, { Component } from 'react';
import Node from './MoveNode';
import { translate } from '../../utils/transformFn';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.renderNodes = this.renderNodes.bind(this);
  }

  render() {
    return (
        <Node />
    );
  }

  renderNodes() {
    return this.props.nodes.map((node, i) => <Node key={i} {...node} />);
  }

}

