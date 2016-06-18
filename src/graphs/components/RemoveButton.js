import React, { PropTypes } from 'react';

const RemoveButton = ({ x, y, r, onClick, bgColor, ...props}) => (
  <g onClick={onClick}>
    <circle r={r} cx={x} cy={y} fill={bgColor} {...props} />
    <line x1={x-r/2} x2={x+r/2} y1={y-r/2} y2={y+r/2} stroke="#ffffff" fill="none" strokeWidth="1" strokeLinecap="round" />
    <line x1={x+r/2} x2={x-r/2} y1={y-r/2} y2={y+r/2} stroke="#ffffff" fill="none" strokeWidth="1" strokeLinecap="round" />
  </g>
);

export default RemoveButton;

