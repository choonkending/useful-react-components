import React, { Component } from 'react';
import WhiteSheep from './WhiteSheep';
import wrapWithSVG from './wrapWithSVG';
import applyFilter, { TornFilter } from '../../applyFilter';


const WhiteSheepWithFilter = ({transform, filter, ...props}) => (
  <g transform={transform} {...props}>
    <WhiteSheep filter={filter} />
  </g>
);

export default wrapWithSVG(applyFilter(WhiteSheepWithFilter, TornFilter));

