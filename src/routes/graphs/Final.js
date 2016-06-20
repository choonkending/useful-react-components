import React, { Component } from 'react';
import { provideDragCoordinates, provideDimensions } from '../../graphs';
import { FinalMap } from '../../graphs/FinalMap';
const InteractiveMap = provideDimensions(provideDragCoordinates(FinalMap));

import '../../main.css';

export default class Final extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}

