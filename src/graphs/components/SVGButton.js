import React from 'react';

const SVGButton = ({onClick, transformFn, ...props}) => (
  <g onClick={onClick} transform={transformFn} {...props}>
    <circle cx="25" cy="25" r="25" fill="#43B05C" />
    <line x1="25" x2="25" y1="13" y2="38"
      fill="none" stroke="#fff" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      stroke-miterlimit="10"/>
    <line x1="25" x2="25" y1="13" y2="38"
      fill="none" stroke="#fff" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      stroke-miterlimit="10"/>
    <line x1="13" x2="38" y1="25" y2="25"
      fill="none" stroke="#fff" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      stroke-miterlimit="10"/>
  </g>
);

export default SVGButton;

