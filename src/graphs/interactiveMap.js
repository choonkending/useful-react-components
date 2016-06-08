import React, { Component } from 'react';

const interactiveMap = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      dragging: false
    };
    this.pan = this.pan.bind(this);
    this.zoom = this.zoom.bind(this);
    this.onWheel = this.onWheel.bind(this);
  }

  pan(dx, dy) {
    const { matrix } = this.state;
    const { e, f } = matrix;
    this.setState({
      matrix: {
        ...matrix,
        e: e + dx,
        f: f + dy
      }
    });
  }

  zoom(scale) {
    const { matrix } = this.state;
    const transformedMatrix = Object.keys(matrix).reduce((acc, cur) => {
      acc[cur] = matrix[cur] * scale;
      return acc;
    }, {});
    this.setState({ matrix: transformedMatrix });
  }

  onWheel(e) {
    if (e.deltaY < 0) {
      this.zoom(1.05);
    } else {
      this.zoom(0.95);
    }
  }

  render() {
    const { matrix } = this.state;
    const matrixValues = Object.keys(matrix).map(k => matrix[k]);
    const { width, height, ...restProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        onWheel={this.onWheel}>
        <g transform={`matrix(${matrixValues.join(' ')})`}>
          <ComposedComponent {...restProps} />
        </g>
      </svg>
    );
  }
};

export default interactiveMap;

