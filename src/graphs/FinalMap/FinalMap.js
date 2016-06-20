import React, { Component } from 'react';
import AddButton from '../components/AddButton';

class FinalMap extends Component {
  constructor(props) {
    super(props);
    this.getViewBoxValues = this.getViewBoxValues.bind(this);
    this.state = { viewBox: [] };
  }

  render() {
    const { width, height, top } = this.props;
    const viewBox = this.getViewBoxValues();
    return (
      <svg viewBox={viewBox}>
      <AddButton x={width/2} y={height - top - 50} className="map__button" />
      </svg>
    );
  }

  getViewBoxValues() {
    const { width, height } = this.props;
    const { viewBox } = this.state;
    if (width == null || height == null) return;
    return viewBox.length > 0 ? viewBox.join(' ') : `0 0 ${width} ${height}`;
  }
}

export default FinalMap;

