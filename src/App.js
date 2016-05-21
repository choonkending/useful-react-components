import React, { Component } from 'react';
import { SimpleButton, styles } from './buttons/SimpleButton';

import './main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Buttons</p>
          <SimpleButton>
            Click me!
          </SimpleButton>
        </div>
      </div>
    );
  }
}

