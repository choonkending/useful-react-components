import React, { Component, PropTypes } from 'react';
import { getCoordinates, addEvent, removeEvent } from './utils/eventUtils';
import { convertMatrixToString, convertStringToMatrix } from './utils/transformFn';

const getValuesFromObj = obj => Object.keys(obj).map(k => obj[k]);

const interactive = ComposedComponent => {
  class Interactive extends Component {
    constructor(props) {
      super(props);
      const { transform } = props;
      const matrix = transform ? convertStringToMatrix(transform): { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
      console.log(matrix);
      this.state = {
        matrix,
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
    }

    componentWillUnmount() {
      removeEvent(document, 'mousemove', this.onDragMove);
      removeEvent(document, 'mouseup', this.onDragEnd);
      removeEvent(document, 'touchmove', this.onDragMove);
      removeEvent(document, 'touchend', this.onDragEnd);
    }

    render() {
      const { matrix } = this.state;
      const transform = convertMatrixToString(getValuesFromObj(matrix));
      console.log(transform);
      const { transform: omittedTransform, ...restProps } = this.props;
      return (
        <ComposedComponent
        onMouseDown={this.onDragStart}
        onTouchStart={this.onDragStart}
        onMouseUp={this.onDragEnd}
        onTouchEnd={this.onDragEnd}
        onWheel={this.onWheel}
        transform={transform}
        {...restProps} />
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
      const { x, y } = getCoordinates(e);
      this.setState({
        dragging: true,
        x,
        y
      });
      addEvent(document, 'mousemove', this.onDragMove);
      addEvent(document, 'mouseup', this.onDragEnd);
      addEvent(document, 'touchmove', this.onDragMove);
      addEvent(document, 'touchend', this.onDragEnd);
    }

    onDragMove(e) {
      if (!this.state.dragging) return;
      const { x, y } = getCoordinates(e);

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
      removeEvent(document, 'mousemove', this.onDragMove);
      removeEvent(document, 'mouseup', this.onDragEnd);
      removeEvent(document, 'touchmove', this.onDragMove);
      removeEvent(document, 'touchend', this.onDragEnd);
    }

    pan(dx, dy) {
      const { matrix } = this.state;
      const { e, f } = matrix;
      const { onTransform } = this.props;
      this.setState({
        matrix: {
          ...matrix,
          e: e + dx,
          f: f + dy
        }
      });
      const transform = convertMatrixToString(getValuesFromObj(this.state.matrix));
      onTransform && onTransform(transform);
    }

    zoom(scale) {
      const { width, height, onTransform } = this.props;
      const { matrix } = this.state;
      const { a, d, e, f } = matrix;
      this.setState({
        matrix: {
          ...matrix,
          a: a * scale,
          d: d * scale,
          e: e * scale + (1 - scale) * width / 2,
          f: f * scale + (1 - scale) * height / 2
        }
      });
      const transform = convertMatrixToString(getValuesFromObj(this.state.matrix));
      onTransform && onTransform(transform);
    }

  }

  Interactive.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onTransform: PropTypes.func
  };

  return Interactive;
};
export default interactive;

