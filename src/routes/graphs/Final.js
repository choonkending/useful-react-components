import React, { Component } from 'react';
import { provideDimensions } from '../../graphs';
import { FinalMap, styles } from '../../graphs/FinalMap';
const InteractiveMap = provideDimensions(FinalMap);

import '../../main.css';

export default class Final extends Component {
  render() {
    return (
      <InteractiveMap />
    );
  }
}

