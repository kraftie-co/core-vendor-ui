/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { counterActions } from '../../store/slices/counterSlice';
import { useTheme } from 'styled-components';
import Typography from '../../components-export/Typography';
import { Flex } from 'rebass';

// logo + name
// user details
//      logout button
//     profile button
//    edit products button

function NavBar({ user }) {
  const theme = useTheme();

  return <Flex></Flex>;
}

NavBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchProps)(NavBar);
