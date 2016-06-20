import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import SNode from '../components/SNode';
import { translate } from '../utils/transformFn';

class FinalMap extends Component {
  constructor(props) {
    super(props);
    this.getViewBoxValues = this.getViewBoxValues.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.renderNodes = this.renderNodes.bind(this);
    this.state = { viewBox: [], graphs: [], nodes: [] };
  }

  render() {
    const { width, height, top } = this.props;
    const viewBox = this.getViewBoxValues();
    return (
      <svg viewBox={viewBox}>
        { this.renderNodes() }
        <g transform={translate(width/2, height - top - 50)}>
          <AddButton onClick={this.onAddButtonClick} className="map__button" />
          <text x="75" y="0">Click + to begin!</text>
        </g>
      </svg>
    );
  }

  getViewBoxValues() {
    const { width, height } = this.props;
    const { viewBox } = this.state;
    if (width == null || height == null) return;
    return viewBox.length > 0 ? viewBox.join(' ') : `0 0 ${width} ${height}`;
  }

  getPosition() {
    const { width , height, top } = this.props;
    // Default position
    // We could move this to another helper module
    // And specify: center, bottom, etc
    return { x: width/2, y: height/2 - top };
  }

  onAddButtonClick() {
    const { nodes, graphs } = this.state;
    const position = this.getPosition();
    this.setState({
      graphs: [
        ...graphs,
        nodes.length
      ],
      nodes: [
        ...nodes,
        {...position}
      ]
    });
  }

  renderNodes() {
    return this.state.nodes.map((node, i) => <SNode key={i} {...node} />);
  }
}

export default FinalMap;

