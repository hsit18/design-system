import React from 'react';
import PropTypes from 'prop-types';

import { ButtonElement } from './styled';

const Button = ({ children, loading, disabled, ...restProps }) => (
  <ButtonElement loading={loading ? 1 : 0} disabled={loading || disabled} {...restProps}>
    {children}
  </ButtonElement>
);

Button.defaultProps = {
  variant: 'button',
  color: 'primary',
  outline: false,
  block: false,
  loading: false,
  disabled: false,
  flat: false,
  size: 'medium',
};

Button.propTypes = {
  /**
   * Typography variants: H1, body, subtext...
   */ 
  variant: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  block: PropTypes.bool,
  loading: PropTypes.bool,
  flat: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
