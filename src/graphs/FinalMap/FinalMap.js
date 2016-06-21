import React, { Component } from 'react';
import AddButton from '../components/AddButton';
import { Graph, ViewModel as GraphViewModel } from '../components/graph';
import { translate } from '../utils/transformFn';


class FinalMap extends Component {
  constructor(props) {
    super(props);
    this.getViewBoxValues = this.getViewBoxValues.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.renderGraphs = this.renderGraphs.bind(this);
    this.state = { viewBox: [], graphs: [] };
  }

  render() {
    const { width, height, top } = this.props;
    const viewBox = this.getViewBoxValues();
    return (
      <svg viewBox={viewBox}>
        { this.renderGraphs() }
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
    const { graphs } = this.state;
    const position = this.getPosition();
    this.setState({
      graphs: [
        ...graphs,
        new GraphViewModel({ position })
      ],
    });
  }

  renderGraphs() {
    return this.state.graphs.map((g, i) => <Graph key={i} {...g.getGraph()} />);
  }
}

export default FinalMap;

