
import React, { Component } from 'react';

const WorkingCircle = ({ cx, cy, r, ...props }) => (
  <svg width="100%" height="100%">
    <circle cx={cx} cy={cy} r={r} {...props} />
  </svg>
);

WorkingCircle.defaultProps = {
  cx: 100,
  cy: 50,
  r: 25
};

export default WorkingCircle;

