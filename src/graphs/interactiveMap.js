import React, { Component } from 'react';

const interactiveMap = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [1, 0, 0, 1, 0, 0],
      dragging: false
    };
    this.pan = this.pan.bind(this);
    this.zoom = this.zoom.bind(this);
    this.onWheel = this.onWheel.bind(this);
  }

  pan(dx, dy) {
    const m = this.state.matrix;
    m[4] += dx;
    m[5] += dy;
    this.setState({ matrix: m });
  }

  zoom(scale) {
    const { width, height } = this.props;
    const m = this.state.matrix.map(t => {
      return t * scale;
    });
    this.setState({ matrix: m });
  }

  onWheel(e) {
    if (e.deltaY < 0) {
      this.zoom(1.05);
    } else {
      this.zoom(0.95);
    }
  }

  render() {
    const { width, height, ...restProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        onWheel={this.onWheel}>
        <g transform={`matrix(${this.state.matrix.join(' ')})`}>
          <ComposedComponent {...restProps} />
        </g>
      </svg>
    );
  }
};

export default interactiveMap;

