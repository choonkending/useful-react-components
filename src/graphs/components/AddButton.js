import React from 'react';

const AddButton = ({x, y, bgColor, color, onClick, ...props}) => (
  <g onClick={onClick} {...props}>
    <circle cx={x} cy={y} r="25" fill={bgColor} />
    <line x1={x} x2={x} y1={y-12} y2={y+13}
      fill="none" stroke={color} strokeWidth="2"
      strokeLinecap="round" />
    <line x1={x-12} x2={x+13} y1={y} y2={y}
      fill="none" stroke={color} strokeWidth="2"
      strokeLinecap="round" />
  </g>
);

AddButton.defaultProps = {
  x: 0,
  y: 0,
  bgColor: "#42B05C",
  color: "#fff"
};

export default AddButton;

