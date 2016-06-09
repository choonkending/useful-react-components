import React from 'react';
import SVGButton from '../components/SVGButton';

const SimpleMap = ({width, height}) => (
  <SVGButton />
);

SimpleMap.defaultProps = {
  width: '100%',
  height: '100%'
};

export default SimpleMap;

