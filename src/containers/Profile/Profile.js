/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { useTheme } from 'styled-components';
import Typography from '../../components-export/Typography';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store/slices/userSlice';
import { Flex } from 'rebass';
function Profile({ connectedUser, setWantedRoute }) {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectedUser.userId) {
      setWantedRoute('/products');
      navigate('/login');
    }
  }, [connectedUser]);

  return (
    <Flex height="100%" width="100%" paddingLeft="10%" paddingRight="10%" backgroundColor="#EBFAFE">
      User id connected
    </Flex>
  );
}

Profile.propTypes = {
  value: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  connectedUser: state.user.connectedUser,
});

const mapDispatchProps = (dispatch) => ({
  setWantedRoute: bindActionCreators(userActions.setWantedRoute, dispatch),
});
export default connect(mapStateToProps, mapDispatchProps)(Profile);
