import React from 'react';

const SimpleMap = ({width, height}) => (
  <circle cx="50" cy="50" r="50" />
);

SimpleMap.defaultProps = {
  width: '100%',
  height: '100%'
};

export default SimpleMap;

