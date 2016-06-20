import React, { Component } from 'react';
import { getCoordinates } from './utils/eventUtils';

const provideDragCoordinates = ComposedComponent => class DragCoordinates extends Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      dragging: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    };
  }

  render() {
    const { dragging, ...restState } = this.state;
    return (
      <g onMouseDown={this.onDragStart}
        onTouchStart={this.onDragStart}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        onMouseUp={this.onDragEnd}
        onTouchEnd={this.onDragEnd}>
        <ComposedComponent drawing={dragging} {...restState} {...this.props} />
      </g>
    );
  }

  onDragStart(e) {
    const { x: startX, y: startY } = getCoordinates(e);
    this.setState({
      dragging: true,
      startX,
      startY,
      endX: startX,
      endY: startY
    });
  }

  onDragMove(e) {
    if (!this.state.dragging) return;
    const { x: endX, y: endY } = getCoordinates(e);
    this.setState({ endX, endY });
  }

  onDragEnd(e) {
    this.setState({ dragging: false });
  }

};

export default provideDragCoordinates;
