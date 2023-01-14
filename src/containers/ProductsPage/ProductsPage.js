/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'rebass';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Styled from './ProductsPage.styled';

function ProductsPage({ connectedUser }) {
  // const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!connectedUser.userId) {
      navigate('/login');
    }
  }, [connectedUser]);

  return (
    <Flex height="100%" width="100%" paddingLeft="10%" paddingRight="10%" backgroundColor="#EBFAFE">
      User id connected
    </Flex>
  );
}

ProductsPage.propTypes = {
  connectedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  connectedUser: state.user.connectedUser,
});

const mapDispatchProps = (dispatch) => ({
  // increase: bindActionCreators(counterActions.increase, dispatch),
  // decrease: bindActionCreators(counterActions.decrease, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(ProductsPage);
