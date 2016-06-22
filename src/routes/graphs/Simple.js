import React, { Component } from 'react';
import { interactive, provideDimensions } from '../../graphs';
import { SimpleMap } from '../../graphs/SimpleMap';

import '../../main.css';

const Simple = props => {
  const { width, height, transform, ...restProps } = props;
  return (
    <svg width={width} height={height} {...restProps}>
      <g transform={transform}>
        <SimpleMap {...props} />
      </g>
    </svg>
  );
};

export default provideDimensions(interactive(Simple));

