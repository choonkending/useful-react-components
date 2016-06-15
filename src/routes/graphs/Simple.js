import React, { Component } from 'react';
import { interactiveSVG, provideDimensions } from '../../graphs';
import { SimpleMap } from '../../graphs/SimpleMap';
const InteractiveMap = provideDimensions(interactiveSVG(SimpleMap));

import '../../main.css';

export default class Simple extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}

