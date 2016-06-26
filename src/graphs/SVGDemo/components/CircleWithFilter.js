import React, { Component } from 'react';

const Blur = props => (
  <filter id="f1" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
  </filter>
);

const CircleWithFilter = ({ cx, cy, r, ...props }) => (
  <svg width="100%" height="100%">
    <Blur />
    <circle cx={cx} cy={cy} r={r} {...props} filter="url(#f1)" />
  </svg>
);

CircleWithFilter.defaultProps = {
  cx: 100,
  cy: 50,
  r: 25
};

export default CircleWithFilter;

