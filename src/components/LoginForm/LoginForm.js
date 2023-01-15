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

function LoginForm({ login, authState }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLogin() {
    login({ email, password });
  }

  useEffect(() => {
    if (authState.canRedirect) {
      navigate(authState.wantedRoute);
    }
  }, [authState]);

  return (
    <Flex flexDirection={'column'} width="100%">
      <Typography {...theme.titleBold}>{t('LOGIN')}</Typography>

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
      <Link to="/forgot-password" style={{ marginTop: theme.spacing02 }}>
        <Typography>{t('FORGOT_PASSWORD')}</Typography>
      </Link>

      <Button width="100%" onClick={onLogin} marginTop={theme.spacing02}>
        {t('LOGIN')}
      </Button>

      <Link to="/register">
        <Typography>{t('REDIRECT_TO_REGISTER')}</Typography>
      </Link>
    </Flex>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  authState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.user.authState,
});

const mapDispatchProps = (dispatch) => ({
  login: bindActionCreators(userActions.login, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(LoginForm);
