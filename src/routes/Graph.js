import React, { Component } from 'react';
import { interactiveSVG } from '../graphs';
import { SimpleMap } from '../graphs/SimpleMap';
const InteractiveMap = interactiveSVG(SimpleMap);

import '../main.css';

export default class Graph extends Component {
  render() {
    return (
      <InteractiveMap width="100%" height="100%"/>
    );
  }
}

