import React, { Component } from 'react';
import AddButton from '../../components/AddButton';
import Graph from './Graph';
import provideDimensions from '../../provideDimensions';
import { translate } from '../../utils/transformFn';
import { interactive } from '../../interactive';

class FinalMap extends Component {
  constructor(props) {
    super(props);
    this.getViewBoxValues = this.getViewBoxValues.bind(this);
    this.getTransformValues = this.getTransformValues.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.renderGraphs = this.renderGraphs.bind(this);
    this.state = { viewBox: [], graphs: [] };
  }

  render() {
    const { width, height } = this.props;
    const viewBox = this.getViewBoxValues();
    const transform = this.getTransformValues();
    return (
      <svg width={width} height={height} viewBox={viewBox}>
        { this.renderGraphs() }
        <g transform={transform}>
          <AddButton onClick={this.onAddButtonClick} className="map__button" />
          <text x="75" y="0">Click + to begin!</text>
        </g>
      </svg>
    );
  }

  getTransformValues() {
    const { width, height, top } = this.props;
    if (width == null || height == null || top == null) return;
    return translate(width/2, height - top - 50);
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
    const { width, height } = this.props;
    const position = this.getPosition();
    this.setState({
      graphs: [
        ...graphs,
        { id: graphs.length, position, size: { width, height }}
      ],
    });
  }

  renderGraphs() {
    const { width, height } = this.props;
    return this.state.graphs.map((g, i) => <Graph key={i} {...g} />);
  }
}

export default provideDimensions(FinalMap);

