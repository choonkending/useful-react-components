import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import Node from '../components/Node';

const translate = (x, y) => `translate(${x} ${y})`;
const rotate = (deg, x, y) => `rotate(${deg} ${x} ${y})`;
const toRadians = x => x * Math.PI / 180;
const MAX_NODES = 8;
const RADIUS = 25;

class ZoomMap extends Component {
  constructor(props) {
    super(props);
    this.handleAddButtonClick =  this.handleAddButtonClick.bind(this);
    this.state = { nodes: [] };
  }

  handleAddButtonClick() {
    const { nodes } = this.state;
    const i = nodes.length;
    const deg = (i % MAX_NODES) * (360 / MAX_NODES);
    const radians = toRadians(deg);
    this.setState({
      nodes: [
        ...nodes,
        {
          x: 25 + 100 * Math.cos(radians),
          y: 25 + 100 * Math.sin(radians),
          radius: RADIUS,
          bgColor: "#000"
        }
      ]
    });
  }

  render() {
    const { width, height } = this.props;
    const nodes = this.state.nodes.map((node, i) => <Node key={i} {...node} />);
    return (
      <g transform={translate(width/2, height/2)}>
        { nodes }
        <AddButton onClick={this.handleAddButtonClick} />
      </g>
    );
  }
}

export default ZoomMap;

