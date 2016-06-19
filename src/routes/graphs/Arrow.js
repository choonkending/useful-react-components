import React, { Component } from 'react';
import { provideDragCoordinates, provideDimensions } from '../../graphs';
import { ArrowMap } from '../../graphs/ArrowMap';
const InteractiveMap = provideDimensions(provideDragCoordinates(ArrowMap));

import '../../main.css';

export default class Arrow extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}

