import React, { Component } from 'react';
import { provideDimensions } from '../../graphs';
import { FinalMap, styles } from '../../graphs/FinalMap';
const InteractiveMap = provideDimensions(FinalMap);

import '../../main.css';

const Final = props => <InteractiveMap />;

export default Final;

