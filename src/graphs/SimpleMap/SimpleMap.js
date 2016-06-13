import React from 'react';
import SVGButton from '../components/SVGButton';

const translate = (x, y) => `translate(${x} ${y})`;

const SimpleMap = ({width, height}) => (
  <SVGButton transformFn={translate(width/2, height/2)} />
);

export default SimpleMap;

