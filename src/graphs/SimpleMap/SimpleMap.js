import React from 'react';
import AddButton from '../components/AddButton';

const translate = (x, y) => `translate(${x} ${y})`;

const SimpleMap = ({width, height}) => (
  <AddButton transformFn={translate(width/2, height/2)} />
);

export default SimpleMap;

