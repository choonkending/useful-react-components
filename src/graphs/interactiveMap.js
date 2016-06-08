import React, { Component } from 'react';

const interactiveMap = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      dragging: false,
      x: 0,
      y: 0
    };
    this.pan = this.pan.bind(this);
    this.zoom = this.zoom.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.isTouchEvent = this.isTouchEvent.bind(this);
  }

  render() {
    const { matrix } = this.state;
    const matrixValues = Object.keys(matrix).map(k => matrix[k]);
    const { width, height, ...restProps } = this.props;
    return (
      <svg
        width={width}
        height={height}
        onMouseDown={this.onDragStart}
        onTouchStart={this.onDragStart}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        onMouseUp={this.onDragEnd}
        onTouchEnd={this.onDragEnd}
        onWheel={this.onWheel}>
        <g transform={`matrix(${matrixValues.join(' ')})`}>
          <ComposedComponent {...restProps} />
        </g>
      </svg>
    );
  }

  onWheel(e) {
    if (e.deltaY < 0) {
      this.zoom(1.05);
    } else {
      this.zoom(0.95);
    }
  }

  onDragStart(e) {
    const { x, y } = this.getCoordinates(e);
    this.setState({
      dragging: true,
      x,
      y
    });
  }

  onDragMove(e) {
    if (!this.state.dragging) return;
    const { x, y } = this.getCoordinates(e);

    // Take the delta where we are minus where we came from
    const dx = x - this.state.x;
    const dy = y - this.state.y;

    this.pan(dx, dy);

    // Update the new x and y position
    // Because drag is likely a continuous movement
    this.setState({ x, y});
  }

  onDragEnd() {
    this.setState({ dragging: false });
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

  isTouchEvent(e) {
    return e.clientX === 'undefined';
  }

  getCoordinates(e) {
    const { clientX, clientY } = this.isTouchEvent(e) ? e.changedTouches[0] : e;
    return {
      x: clientX,
      y: clientY
    };
  }
};

export default interactiveMap;

