import React, { Component } from 'react';
import { interactiveSVG, provideDimensions } from '../../graphs';
import { ArrowMap } from '../../graphs/ArrowMap';
const InteractiveMap = provideDimensions(interactiveSVG(ArrowMap));

import '../../main.css';

export default class Arrow extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}

