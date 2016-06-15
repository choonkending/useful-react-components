import React from 'react';

const Node = ({x, y, radius, bgColor}) => (
  <circle r={radius} cx={x} cy={y} fill={bgColor} />
);

export default Node;

