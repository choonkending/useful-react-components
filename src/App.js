import React, { Component } from 'react';
import { NormalButton, styles } from './buttons/NormalButton';

import './main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Buttons</p>
          <NormalButton />
        </div>
      </div>
    );
  }
}

