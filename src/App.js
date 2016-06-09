import React, { Component } from 'react';
import { SimpleButton, styles } from './buttons/SimpleButton';
import { interactiveSVG } from './graphs';
import { SimpleMap } from './graphs/SimpleMap';
import { enhanceButton } from './buttons/ButtonWithStates';
const ButtonWithStates = enhanceButton(SimpleButton);
const InteractiveMap = interactiveSVG(SimpleMap);

import './main.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="component">
          <p className="component__title">Buttons</p>
          <div className="component__group">
            <SimpleButton>
              Imma Simple Button
            </SimpleButton>
            <ButtonWithStates>
              Imma button with lotsa states
            </ButtonWithStates>
          </div>
        </div>
        <div className="component">
          <p className="component__title">Maps</p>
          <div className="component__group">
            <InteractiveMap width="100%" height="100%"/>
          </div>
        </div>
      </div>
    );
  }
}

