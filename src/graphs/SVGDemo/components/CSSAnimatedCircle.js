import React, { Component } from 'react';
import wrapWithSVG from './wrapWithSVG';

const CSSAnimatedCircle = props => (
    <circle className="animate" {...props} />
);

CSSAnimatedCircle.defaultProps = {
  cx: 100,
  cy: 50,
  r: 25
};

export default wrapWithSVG(CSSAnimatedCircle);

