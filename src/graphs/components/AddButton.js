import React from 'react';

const AddButton = ({x, y, r, fill, color, onClick, transform, ...props}) => (
  <g onClick={onClick} {...props}>
    <circle cx={x} cy={y} r={r} fill={fill} />
    <line x1={x} x2={x} y1={y-r/2} y2={y+r/2}
      fill="none" stroke={color} strokeWidth="2"
      strokeLinecap="round" />
    <line x1={x-r/2} x2={x+r/2} y1={y} y2={y}
      fill="none" stroke={color} strokeWidth="2"
      strokeLinecap="round" />
  </g>
);

AddButton.defaultProps = {
  x: 25,
  y: 0,
  r: 25,
  fill: "#42B05C",
  color: "#fff"
};

export default AddButton;

