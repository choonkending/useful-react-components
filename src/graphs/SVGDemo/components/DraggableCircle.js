import React, { Component } from 'react';

export default class DraggableCircle extends Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      dragging: false,
      translate: { x: 0, y: 0 },
      startX: 0,
      startY: 0
    };
  }

  render() {
    const { translate: { x, y } } = this.state;
    return (
      <svg width="100%" height="100%"
        onMouseDown={this.onDragStart}
        onMouseMove={this.onDragMove}
        onMouseUp={this.onDragEnd}>
        <circle transform={`translate(${x} ${y})`} {...this.props} />
      </svg>
    );
  }

  onDragStart(e) {
    const { clientX, clientY } = e;
    this.setState({ dragging: true, startX: clientX, startY: clientY});
  }

  onDragMove(e) {
    if (!this.state.dragging) return;
    const { clientX, clientY } = e;
    const { startX, startY, translate: { x, y }}= this.state;
    const dx = clientX - startX;
    const dy = clientY - startY;
    this.setState({
      translate: {
        x: x + dx,
        y: y + dy
      },
      startX: clientX,
      startY: clientY
    });
  }

  onDragEnd() {
    this.setState({ dragging: false });
  }
}

DraggableCircle.defaultProps = {
  cx: 100,
  cy: 50,
  r: 25
};

