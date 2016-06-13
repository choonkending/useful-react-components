import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

const provideDimensions = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.getDimensions = this.getDimensions.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    // Default to full width and height
    this.state = { width: "100%", height: "100%" };
  }

  componentDidMount() {
    this.updateDimensions();
  }

  componentWillReceiveProps() {
    this.updateDimensions();
  }

  render() {
    return <ComposedComponent ref="domElement" {...this.state} {...this.props} />;
  }

  getDimensions() {
    const domNode = findDOMNode(this.refs.domElement);
    return domNode.getBoundingClientRect();
  }

  updateDimensions() {
    const { width, height } = this.getDimensions();
    this.setState({ width, height });
  }
};

export default provideDimensions;

