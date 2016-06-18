import React, { Component } from 'react';
import { interactiveSVG, provideDimensions } from '../../graphs';
import { ZoomMap } from '../../graphs/ZoomMap';
const InteractiveMap = provideDimensions(interactiveSVG(ZoomMap));

import '../../main.css';

export default class Zoom extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}
