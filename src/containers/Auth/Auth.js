import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import { AUTH_TYPE } from '../../constants';
import { Container, FormCard } from './Auth.styled';

function Auth({ type }) {
  return (
    <Container>
      <FormCard>{type === AUTH_TYPE.REGISTER ? <RegisterForm /> : <LoginForm />}</FormCard>
    </Container>
  );
}

Auth.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Auth;
