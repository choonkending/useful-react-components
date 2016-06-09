import React from 'react';
import Circle from './Circle';
import Rect from './Rect';

const SVGButton = ({onClick, ...props}) => (
  <g onClick={onClick} {...props}>
    <Circle cx="10" cy="10" r="10" fill="#000" />
    <Rect x="2" y="8" width="16" height="3" fill="#fff" />
    <Rect x="8" y="2" width="3" height="16" fill="#fff" />
  </g>
);

export default SVGButton;

