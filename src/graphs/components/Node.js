import React from 'react';

const Node = ({x, y, radius, bgColor, index, onOpen}) => (
  <circle onClick={() => { onOpen && onOpen(index);} } r={radius} cx={x} cy={y} fill={bgColor} />
);

export default Node;

