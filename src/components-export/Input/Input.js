import React from 'react';
import PropTypes from 'prop-types';

import { InputStyled } from './Input.styled';
import Typography from '../Typography';

function Input({ placeholder, type, value, onChange, label, ...otherProps }) {
  return (
    <>
      <label htmlFor={label}>
        <Typography>{label}</Typography>
      </label>
      <InputStyled
        id={label}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        otherProps={otherProps}
      />
    </>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  type: '',
  value: undefined,
  label: '',
};

export default Input;
