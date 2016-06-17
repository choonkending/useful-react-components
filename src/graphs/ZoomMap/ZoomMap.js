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
    this.handleNodeOpen = this.handleNodeOpen.bind(this);
    this.state = { nodes: [], viewBox: []};
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
          x: width/2 + 100 * Math.cos(radians),
          y: height/2 + 100 * Math.sin(radians),
          radius: RADIUS,
          bgColor: "#000"
        }
      ]
    });
  }

  handleNodeOpen(index) {
    const { nodes } = this.state;
    const node = nodes[index];
    this.setState({ viewBox: [node.x - RADIUS, node.y - RADIUS, RADIUS * 2, RADIUS * 2]});
  }

  render() {
    const { width, height } = this.props;
    const viewBox = this.state.viewBox.length > 0 ? this.state.viewBox.join(' ') : `0 0 ${width} ${height}`;
    const nodes = this.state.nodes.map((node, i) => <Node key={i} index={i} onOpen={this.handleNodeOpen} {...node} />);
    return (
      <svg viewBox={viewBox}>
        { nodes }
        <AddButton x={width/2} y={height/2} onClick={this.handleAddButtonClick} />
      </svg>
    );
  }
}

export default ZoomMap;

