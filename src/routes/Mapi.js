import React, { Component } from 'react';
import { provideDimensions } from '../graphs';
import { Mapi as MapiMap, styles } from '../graphs/Mapi';
const InteractiveMap = provideDimensions(MapiMap);

import '../main.css';

const Mapi = props => <InteractiveMap />;

export default Mapi;

