import React, { Component } from 'react';


const enhanceButton = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      buttonModifier: '',
      buttonText: props.children
    };
  }

  render() {
    const { buttonModifier, buttonText } = this.state;
    const { children, ...props} = this.props;

    return (
        <ComposedComponent
          modifier={buttonModifier}
          children={buttonText}
          onClick={this.onClick}
          {...props} />
    );
  }

  onClick() {
    this.setState({ buttonModifier: 'loading', buttonText: 'Crunching numbers ...'});
    // Make network call
    setTimeout(() => {
      this.setState({ buttonModifier: 'success', buttonText: 'Successful!'});
    }, 2000);
  }

};

export default enhanceButton;

