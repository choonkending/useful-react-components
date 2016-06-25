import React, { Component, PropTypes } from 'react';

const statefulGraph = ComposedComponent => {
  class StatefulGraph extends Component {
    constructor(props) {
      super(props);
      this.onAddNode = this.onAddNode.bind(this);
      this.onAddEdge = this.onAddEdge.bind(this);
      this.state = {
        nodes: [],
        edges: []
      };
    }

    render() {
      return <ComposedComponent onAddNode={this.onAddNode} onAddEdge={this.onAddEdge} {...this.state} {...this.props} />;
    }

    onAddNode(data) {
      const { nodes } = this.state;
      this.setState({
        nodes: [
          ...nodes,
          {...data}
        ]
      });
    }

    onAddEdge() {

    }

  }

  return StatefulGraph;
};

export default statefulGraph;

