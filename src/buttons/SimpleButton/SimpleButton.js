import React, { PropTypes } from 'react';

const SimpleButton = ({ className, modifier, children, ...props }) => {
  const combinedClassName = modifier ? `${className} ${className}--${modifier}`: className;
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
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

