/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { useTheme } from 'styled-components';
import Typography from '../../components-export/Typography';
import { Flex } from 'rebass';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store/slices/userSlice';

function OrdersPage({ connectedUser, setWantedRoute, orders, getOrders, editOrder }) {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectedUser.userId) {
      setWantedRoute('/');
      navigate('/login');
    }
  }, [connectedUser]);

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
  connectedUser: PropTypes.object.isRequired,
  setWantedRoute: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  connectedUser: state.user.connectedUser,
});

const mapDispatchProps = (dispatch) => ({
  setWantedRoute: bindActionCreators(userActions.setWantedRoute, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(OrdersPage);
