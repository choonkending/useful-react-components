import React, { PropTypes } from 'react';

const Edge = ({ x1, x2, y1, y2, ...props }) => (
  <line x1={x1} x2={x2} y1={y1} y2={y2} {...props} />
);

Edge.propTypes = {
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeLinecap: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired
};

Edge.defaultProps = {
  fill: "none",
  stroke: "#000000",
  strokeLinecap: "round",
  strokeWidth: 2
};
export default Edge;

