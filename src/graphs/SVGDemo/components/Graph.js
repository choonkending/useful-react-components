import React, { Component, PropTypes } from 'react';
import statefulGraph from '../../components/graph/statefulGraph';
import ControlNode, { MoverNode } from './Node';
import { translate } from '../../utils/transformFn';
import { CENTER } from '../../components/graph/contants';
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
        <MoverNode {...size} onTransform={this.onTransform} />
        <ControlNode onAddNode={onAddNode} {...position} {...size} />
      </g>
    );
  }

  renderNodes() {
    const { nodes, onAddNode, size } = this.props;
    return nodes.map((node, i) => <ControlNode key={i} onAddNode={onAddNode} {...node} {...size} />);
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
