import React, { Component } from 'react';
import { interactive, provideDimensions } from '../../graphs';
import { ZoomMap } from '../../graphs/ZoomMap';

import '../../main.css';

const Zoom = props => {
  const { width, height, transform, ...restProps } = props;
  return (
    <svg width={width} height={height} {...restProps}>
      <g transform={transform}>
        <ZoomMap {...props} />
      </g>
    </svg>
  );
};

export default provideDimensions(interactive(Zoom));

