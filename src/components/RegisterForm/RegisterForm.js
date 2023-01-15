/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTheme } from 'styled-components';
import { Flex } from 'rebass';

import { userActions } from '../../store/slices/userSlice';
import Typography from '../../components-export/Typography';
import Input, { INPUT_TYPES } from '../../components-export/Input';
import Button from '../../components-export/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RegisterForm({ register, authState }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function onRegister() {
    register({ email, password });
  }

  useEffect(() => {
    if (authState.canRedirect) {
      navigate(authState.wantedRoute);
    }
  }, [authState]);

  return (
    <Flex flexDirection={'column'} width="100%">
      <Typography {...theme.titleBold}>{t('REGISTER')}</Typography>

      <Input
        type={INPUT_TYPES.TEXT}
        placeholder={t('EMAIL')}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        label={t('EMAIL')}
      />
      <Input
        type={INPUT_TYPES.PASSWORD}
        placeholder={t('PASSWORD')}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label={t('PASSWORD')}
      />
      <Input
        type={INPUT_TYPES.PASSWORD}
        placeholder={t('PASSWORD_CONFIRMATION')}
        value={passwordConfirmation}
        onChange={(e) => {
          setPasswordConfirmation(e.target.value);
        }}
        label={t('PASSWORD_CONFIRMATION')}
      />

      <Button width="100%" onClick={onRegister} marginTop={theme.spacing05}>
        {t('REGISTER')}
      </Button>

      <Link to="/login">
        <Typography>{t('ALREADY_HAVE_AN_ACCOUNT')}</Typography>
      </Link>
    </Flex>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  authState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.user.authState,
});

const mapDispatchProps = (dispatch) => ({
  register: bindActionCreators(userActions.register, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(RegisterForm);
