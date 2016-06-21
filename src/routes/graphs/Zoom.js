import React, { Component } from 'react';
import { interactiveSVG, provideDimensions } from '../../graphs';
import { ZoomMap } from '../../graphs/ZoomMap';
const InteractiveMap = provideDimensions(interactiveSVG(ZoomMap));

import '../../main.css';

const Zoom = props => <InteractiveMap />;

export default Zoom;

