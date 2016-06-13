import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

const provideDimensions = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.getDimensions = this.getDimensions.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = { width: null, height: null };
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

