import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import Node from '../components/Node';

const translate = (x, y) => `translate(${x} ${y})`;
const rotate = (deg, x, y) => `rotate(${deg} ${x} ${y})`;
const toRadians = x => x * Math.PI / 180;
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
    this.setState({
      nodes: [...nodes, nodes.length]
    });
  }

  render() {
    const { width, height } = this.props;
    const nodes = this.state.nodes.map((i) => {
      const deg = (i % MAX_NODES) * (360 / MAX_NODES);
      const radians = toRadians(deg);
      const x = 25 + 100 * Math.cos(radians);
      const y = 25 + 100 * Math.sin(radians);
      return <Node key={i} radius={RADIUS} x={x}  y={y} bgColor="#001" />
    });
    return (
      <g transform={translate(width/2, height/2)}>
        { nodes }
        <AddButton onClick={this.handleAddButtonClick} />
      </g>
    );
  }
}

export default SimpleMap;

