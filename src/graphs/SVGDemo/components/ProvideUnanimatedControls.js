
import React, { PropTypes, Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import wrapWithSVG from './wrapWithSVG';
import Circle from './Circle';

const toRadians = x => x * Math.PI / 180;
const SEPARATION_ANGLE = 40;
const FLY_OUT_RADIUS = 120;

class ProvideControls extends Component {
  constructor(props) {
    super(props);
    this.renderInitialControlsStyles = this.renderInitialControlsStyles.bind(this);
    this.renderFinalControlsStyles = this.renderFinalControlsStyles.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.state = { isOpen : false };
  }

  render() {
    const { x, y, controls, ...restProps } = this.props;
    const styles = this.state.isOpen ? this.renderFinalControlsStyles() : this.renderInitialControlsStyles();

    return (
      <g>
      {
        styles.map(({x:cx, y:cy, ...props}, i) => <Circle key={i} cx={cx} cy={cy} {...props} />)
      }
      <Circle onClick={this.toggleClick} className="controls-button" cx={x} cy={y} {...restProps} />
      </g>
    );
  }

  renderInitialControlsStyles() {
    const { controls, x, y } = this.props;
    return controls.map(control => ({ x, y, r: 10 }));
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
        x: x + dx, //left
        y: y - dy, // top
        r: controlRadius
      };
    });
  }

  toggleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

}

ProvideControls.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  controls: PropTypes.array.isRequired,
  controlRadius: PropTypes.number.isRequired,
  transform: PropTypes.string
};

ProvideControls.defaultProps = {
  x: 200,
  y: 150,
  controls: [1, 2, 3, 4, 5],
  controlRadius: 10
};

export default wrapWithSVG(ProvideControls);
