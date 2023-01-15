import React from 'react';
import PropTypes from 'prop-types';

import { BUTTON_TYPES } from './constants';
import { CustomButton, CustomTypography } from './Button.styled';

function Button({ type, children, onClick, ...otherProps }) {
  const [isInFocus, setIsInFocus] = React.useState(false);

  return (
    <CustomButton
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsInFocus(true)}
      onMouseLeave={() => setIsInFocus(false)}
      isInFocus={isInFocus}
      otherProps={otherProps}
    >
      <CustomTypography type={type} isInFocus={isInFocus}>
        {children}
      </CustomTypography>
    </CustomButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([BUTTON_TYPES.PRIMARY, BUTTON_TYPES.SECONDARY, BUTTON_TYPES.DESTRUCTIVE]),
  children: PropTypes.node || PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: BUTTON_TYPES.PRIMARY,
  children: '',
};

export default Button;
