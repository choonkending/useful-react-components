import React, { Component } from 'react';

export const BlurFilter = ({ id, ...props}) => (
  <filter id={id} x="0" y="0" {...props}>
    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
  </filter>
);

export const TornFilter = ({ id, ...props}) => (
  <filter id={id} x="0" y="0" {...props}>
    <feTurbulence result="TURBULENCE" baseFrequency="0.08"
numOctaves="1" seed="1" />
    <feDisplacementMap in="SourceGraphic" in2="TURBULENCE" scale="9" />
  </filter>
);

const applyFilter = (ComposedComponent, Filter = BlurFilter ) => class extends Component {
  render() {
    return (
      <g>
        <Filter id="filter"/>
        <ComposedComponent filter="url(#filter)" />
      </g>
    );
  }
}

export default applyFilter;

