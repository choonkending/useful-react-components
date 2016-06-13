import React from 'react';

const SVGButton = ({onClick, transformFn, ...props}) => (
  <g onClick={onClick} transform={transformFn} {...props}>
    <circle cx="10" cy="10" r="10" fill="#000" />
    <rect x="2" y="8" width="16" height="3" fill="#fff" />
    <rect x="8" y="2" width="3" height="16" fill="#fff" />
  </g>
);

export default SVGButton;

