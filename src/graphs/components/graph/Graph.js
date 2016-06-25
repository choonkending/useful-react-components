import React, { Component, PropTypes } from 'react';
import statefulGraph from './statefulGraph';
import MoveNode from './MoveNode';
import Controls from './Node';
import { translate } from '../../utils/transformFn';
import { CENTER } from './contants';
import { centerPosition } from '../../utils/position';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.renderNodes = this.renderNodes.bind(this);
    this.onTransform = this.onTransform.bind(this);
    this.state = { transform : null };
  }

  render() {
    const { transform } = this.state;
    const { size, onAddNode } = this.props;
    const position = centerPosition(size);
    return (
      <g transform={transform}>
        { this.renderNodes() }
        <MoveNode {...size} onTransform={this.onTransform} />
        <Controls onAddNode={onAddNode} {...position} {...size} />
      </g>
    );
  }

  renderNodes() {
    const { nodes, onAddNode, size } = this.props;
    return nodes.map((node, i) => <Controls key={i} onAddNode={onAddNode} {...node} {...size} />);
  }

  onTransform(transform) {
    this.setState({ transform });
  }

}

Graph.propTypes = {
  nodes: PropTypes.array.isRequired,
  edges: PropTypes.array
};

export { Graph };
export default statefulGraph(Graph);
