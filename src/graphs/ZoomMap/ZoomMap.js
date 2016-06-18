import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import Node from '../components/Node';
import { translate, rotate, toRadians } from '../utils/transformFn';

const MAX_NODES = 8;
const RADIUS = 25;

class ZoomMap extends Component {
  constructor(props) {
    super(props);
    this.handleAddButtonClick =  this.handleAddButtonClick.bind(this);
    this.handleNodeOpen = this.handleNodeOpen.bind(this);
    this.getViewBoxValues = this.getViewBoxValues.bind(this);
    this.state = { nodes: [], viewBox: []};
  }

  render() {
    const { width, height } = this.props;
    const viewBox = this.getViewBoxValues();
    const nodes = this.state.nodes.map((node, i) => <Node key={i} index={i} onOpen={this.handleNodeOpen} {...node} />);
    return (
      <svg viewBox={viewBox}>
        { nodes }
        <AddButton x={width/2} y={height/2} onClick={this.handleAddButtonClick} />
      </svg>
    );
  }

  getViewBoxValues() {
    const { width, height } = this.props;
    const { viewBox } = this.state;
    if (width == null || height == null) return;
    return viewBox.length > 0 ? viewBox.join(' ') : `0 0 ${width} ${height}`;
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
          cx: width/2 + 100 * Math.cos(radians),
          cy: height/2 + 100 * Math.sin(radians),
          r: RADIUS,
          bgColor: "#000"
        }
      ]
    });
  }

  handleNodeOpen(index) {
    const { nodes } = this.state;
    const node = nodes[index];
    const { cx, cy, r } = node;
    this.setState({ viewBox: [ cx - r, cy - r, r * 2, r * 2]});
  }
}

export default ZoomMap;

