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

function OrdersPage({ connectedUser, orders, getOrders, editOrder }) {
  const theme = useTheme();
  // click on order -> open a modal -> edit order
  return (
    <Flex>
      <Flex width="80%" marginLeft="10%" backgroundColor={'blue'}>
        <Typography {...theme.titleBold}>{t('ORDERS')}</Typography>
        {orders.map((order) => (
          <Flex key={order.id}> {order.id} </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

OrdersPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchProps)(OrdersPage);
