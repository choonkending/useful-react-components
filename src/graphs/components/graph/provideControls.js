import React, { PropTypes, Component } from 'react';
import { Node } from './Node';
import AddButton from '../AddButton';

const provideControls = ComposedComponent => {
  class ProvideControls extends Component {
    render() {
      const { transform, x, y, ...restProps } = this.props;
      return (
        <g transform={transform}>
          <Node x={x-100} y={y-100} r="10" />
          <ComposedComponent x={x} y={y} {...restProps} />
        </g>
      );
    }
  }

  ProvideControls.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    transform: PropTypes.string
  };
  return ProvideControls;
};

export default provideControls;

