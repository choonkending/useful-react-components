import React, { Component } from 'react';
import { SimpleButton, styles } from '../buttons/SimpleButton';
import { enhanceButton } from '../buttons/ButtonWithStates';
const ButtonWithStates = enhanceButton(SimpleButton);

import '../main.css';

export default class Button extends Component {
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
      </div>
    );
  }
}

