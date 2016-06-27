import React, { Component } from 'react';

export default class DraggableCircle extends Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    const { cx: currentX, cy: currentY } = props;
    this.state = {
      dragging: false,
      translate: { x: 0, y: 0 },
      currentX,
      currentY
    };
  }

  render() {
    const { translate: { x, y } } = this.state;
    return (
      <svg width="100%" height="100%"
          onMouseDown={this.onDragStart}
          onMouseMove={this.onDragMove}
          onMouseUp={this.onDragEnd}>
        <circle
          transform={`translate(${x} ${y})`}
          {...this.props} />
      </svg>
    );
  }

  onDragStart(e) {
    const { clientX, clientY } = e;
    this.setState({ dragging: true, x: clientX, y: clientY});
  }

  onDragMove(e) {
    if (!this.state.dragging) return;
    const { clientX, clientY } = e;
    const { currentX, currentY, translate: { x, y }}= this.state;
    const dx = clientX - currentX;
    const dy = clientY - currentY;
    console.log("clientY", clientY);
    console.log("currentY", currentY);
    console.log("current transform Y", y);
    console.log("current delta y", dy);
    console.log("translate to", y + dy);
    this.setState({
      translate: {
        x: x + dx,
        y: y + dy
      },
      currentX: clientX,
      currentY: clientY
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

