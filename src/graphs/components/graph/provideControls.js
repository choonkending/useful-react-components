import React, { PropTypes, Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { Node } from './Node';
import AddButton from '../AddButton';
import { toRadians } from '../../utils/transformFn';

const SEPARATION_ANGLE = 40;
const FLY_OUT_RADIUS = 120;

const provideControls = ComposedComponent => {
  class ProvideControls extends Component {
    constructor(props) {
      super(props);
      this.renderInitialControlsStyles = this.renderInitialControlsStyles.bind(this);
      this.renderFinalControlsStyles = this.renderFinalControlsStyles.bind(this);
      this.renderControls = this.renderControls.bind(this);
      this.toggleClick = this.toggleClick.bind(this);
      this.onAddNode = this.onAddNode.bind(this);
      this.state = { isOpen : false };
    }

    render() {
      const { transform, x, y, controls, ...restProps } = this.props;
      return (
        <g transform={transform}>
          { this.renderControls() }
          <ComposedComponent onClick={this.toggleClick} className="controls-button" x={x} y={y} {...restProps} />
        </g>
      );
    }

    renderControls() {
      const { onAddNode } = this.props;
      const styles = this.state.isOpen ? this.renderFinalControlsStyles() : this.renderInitialControlsStyles();
      return styles.map((style, i) => {
        return (
          <Motion style={style} key={i}>
          { props => <Node onClick={this.onAddNode(props)} {...props} /> }
          </Motion>
        );
      });
    }

    renderInitialControlsStyles() {
      const { controls, controlRadius, x, y } = this.props;
      return controls.map(control => ({ x: spring(x, presets.wobbly), y: spring(y, presets.wobbly), r: controlRadius }));
    }

    renderFinalControlsStyles() {
      const { controls, controlRadius, x, y } = this.props;
      const numberOfControls = controls.length;
      const fanAngle = (numberOfControls - 1) * SEPARATION_ANGLE;
      const baseAngle = (180 - fanAngle) / 2;
      return controls.map((control, i) => {
        const angle = baseAngle + i * SEPARATION_ANGLE;
        const degree = toRadians(angle);
        const dx = Math.cos(degree) * FLY_OUT_RADIUS;
        const dy = Math.sin(degree) * FLY_OUT_RADIUS;
        return {
          x: spring(x + dx, presets.wobbly), //left
          y: spring(y - dy, presets.wobbly), // top
          r: controlRadius
        };
      });
    }

    toggleClick() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    onAddNode(node) {
      // We are returning a function so we won't need to implement onClick
      // specifically to return node information in Node
      return fn => this.props.onAddNode({...node, r: 25});
    }

  }

  ProvideControls.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    controls: PropTypes.array.isRequired,
    controlRadius: PropTypes.number.isRequired,
    onAddNode: PropTypes.func,
    transform: PropTypes.string
  };

  ProvideControls.defaultProps = {
    controls: [1, 2, 3, 4, 5],
    controlRadius: 10
  };

  return ProvideControls;
};

export default provideControls;

