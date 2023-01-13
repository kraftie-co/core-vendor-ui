import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { counterActions } from '../../store/slices/counterSlice';
import { useTheme } from 'styled-components';
import Typography from '../../components-export/Typography';

function Login({ value, increase, decrease }) {
  const theme = useTheme();

  return (
    <div>
      <Typography>{value}</Typography>
      <button onClick={increase} style={{ padding: theme.spacing05, color: theme.text01, ...theme.body }}>
        {t('INCREASE')}
      </button>
      <button onClick={decrease} style={{ padding: theme.spacing05, color: theme.text01, ...theme.body }}>
        {t('DECREASE')}
      </button>
    </div>
  );
}

Login.propTypes = {
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

export default connect(mapStateToProps, mapDispatchProps)(Login);
