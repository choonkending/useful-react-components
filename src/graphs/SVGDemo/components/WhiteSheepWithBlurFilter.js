import React, { Component } from 'react';
import WhiteSheep from './WhiteSheep';
import wrapWithSVG from './wrapWithSVG';

const Blur = props => (
  <filter id="f1" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
  </filter>
);

const WhiteSheepWithFilter = ({transform, ...props}) => (
  <g transform={transform} {...props}>
    <Blur />
    <WhiteSheep filter="url(#f1)"/>
  </g>
);

export default wrapWithSVG(WhiteSheepWithFilter);

