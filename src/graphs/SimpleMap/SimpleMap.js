import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import Node from '../components/Node';
import { translate, rotate, toRadians } from '../utils/transformFn';

const MAX_NODES = 8;
const RADIUS = 25;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.handleAddButtonClick =  this.handleAddButtonClick.bind(this);
    this.state = { nodes: [] };
  }

  handleAddButtonClick() {
    const { nodes } = this.state;
    const { width, height } = this.props;
    const i = nodes.length;
    const deg = (i % MAX_NODES) * (360 / MAX_NODES);
    const radians = toRadians(deg);
    this.setState({
      nodes: [
        ...nodes,
        {
          cx: 100 * Math.cos(radians),
          cy: 100 * Math.sin(radians),
          r: RADIUS,
          bgColor: "#000"
        }
      ]
    });
  }

  render() {
    const { width, height } = this.props;
    const nodes = this.state.nodes.map((node, i) => <Node key={i} index={i} onOpen={this.handleNodeOpen} {...node} />);
    return (
      <g transform={translate(width/2, height/2)}>
        { nodes }
        <AddButton onClick={this.handleAddButtonClick} />
      </g>
    );
  }
}

export default SimpleMap;

