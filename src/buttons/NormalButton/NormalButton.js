import React, { Component } from 'react';

export default class NormalButton extends Component {
  render() {
    const { className, modifier, ...props } = this.props;
    const combinedClassName = `${className} ${modifier}`;
    return (
      <button className={combinedClassName} {...props}>Click me</button>
    );
  }
}

NormalButton.defaultProps = {
  className: 'normal-button',
  modifier: ''
};

