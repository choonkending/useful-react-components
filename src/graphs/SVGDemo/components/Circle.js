import React from 'react';

const Circle = ({ cx, cy, r, ...props }) => (
  <circle cx={cx} cy={cy} r={r} {...props} />
);

Circle.defaultProps = {
  cx: 100,
  cy: 50,
  r: 25
};

export default Circle;

