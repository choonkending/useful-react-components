import React, { Component } from 'react';
import { interactiveSVG, provideDimensions } from '../graphs';
import { SimpleMap } from '../graphs/SimpleMap';
const InteractiveMap = provideDimensions(interactiveSVG(SimpleMap));

import '../main.css';

export default class Graph extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}

