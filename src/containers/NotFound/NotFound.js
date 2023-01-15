/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { counterActions } from '../../store/slices/counterSlice';
import { useTheme } from 'styled-components';
import Typography from '../../components-export/Typography';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'rebass';
import Button from '../../components-export/Button';
import icon from '../../assets/NotFound.png';
function NotFound() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex flexDirection="column" alignItems="center">
        <img src={icon} alt="404" style={{ width: '100%', maxWidth: '500px' }} />

        <Typography {...theme.titleBold}>{t('PAGE_NOT_FOUND')}</Typography>
        <Button onClick={() => navigate('/')}>{t('RETURN_HOME')}</Button>
      </Flex>
    </Flex>
  );
}

NotFound.propTypes = {
  value: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

const mapDispatchProps = (dispatch) => ({
  increase: bindActionCreators(counterActions.increase, dispatch),
  decrease: bindActionCreators(counterActions.decrease, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(NotFound);
