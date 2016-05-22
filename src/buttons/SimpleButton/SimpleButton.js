import React, { PropTypes } from 'react';

const SimpleButton = ({ className, modifier, children, ...props }) => {
  const combinedClassName = `${className} ${modifier}`;
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

SimpleButton.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
};

SimpleButton.defaultProps = {
  className: 'simple-button',
  modifier: ''
};

export default SimpleButton;

