import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import Node from '../components/Node';
import Edge from '../components/Edge';
import { translate, rotate, toRadians } from '../utils/transformFn';

const MAX_NODES = 8;
const RADIUS = 25;

class ArrowMap extends Component {
  constructor(props) {
    super(props);
    this.handleAddButtonClick =  this.handleAddButtonClick.bind(this);
    this.handleNodeOpen = this.handleNodeOpen.bind(this);
    this.handleNodeClose = this.handleNodeClose.bind(this);
    this.getViewBoxValues = this.getViewBoxValues.bind(this);
    this.renderNodes = this.renderNodes.bind(this);
    this.renderEdges = this.renderEdges.bind(this);
    this.state = { nodes: [], edges: [], viewBox: [], currentActiveIndex: -1 };
  }

  componentWillReceiveProps(nextProps) {
    const { startX, startY, endX, endY, drawing, top } = nextProps;
    const { edges } = this.state;
    const currentEdges = drawing ? edges.slice(0, edges.length - 1): edges;
    this.setState({
      edges: [
        ...currentEdges,
        { x1: startX, x2: endX, y1: startY - top, y2: endY - top }
      ]
    });
  }

  render() {
    const { width, height } = this.props;
    const viewBox = this.getViewBoxValues();
    return (
      <svg viewBox={viewBox}
       onMouseDown={this.onDragStart}
        onTouchStart={this.onDragStart}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        onMouseUp={this.onDragEnd}
        onTouchEnd={this.onDragEnd}>
        { this.renderEdges() }
        <AddButton x={width/2} y={height/2} />
      </svg>
    );
  }

  renderEdges() {
    return this.state.edges.map((props, i) => <Edge key={i} {...props} />);
  }

  renderNodes() {
    const { nodes, currentActiveIndex } = this.state;
    return nodes.map((node, i) => (
      <Node key={i}
            index={i}
            isActive={currentActiveIndex === i}
            onOpen={this.handleNodeOpen}
            onClose={this.handleNodeClose}
            {...node} />
    ));
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
    this.setState({
      viewBox: [ cx - r, cy - r, r * 2 + 100, r * 2],
      currentActiveIndex: index
    });
  }

  handleNodeClose() {
    this.setState({
      viewBox: [],
      currentActiveIndex: -1
    });
  }
}

export default ArrowMap;

