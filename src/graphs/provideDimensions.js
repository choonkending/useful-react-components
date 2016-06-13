import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

const defaultDimensions = { width: '100%', height: '100%' };

const provideDimensions = (ComposedComponent, dimensions=defaultDimensions) => class extends Component {
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
    return (
      <div ref="domElement" style={dimensions}>
        <ComposedComponent {...this.state} {...this.props} />
      </div>
    );
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

