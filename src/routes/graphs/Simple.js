import React, { Component } from 'react';
import { interactiveSVG, provideDimensions } from '../../graphs';
import { SimpleMap } from '../../graphs/SimpleMap';
const InteractiveMap = provideDimensions(interactiveSVG(SimpleMap));

import '../../main.css';

const Simple = props => <InteractiveMap />;

export default Simple;

