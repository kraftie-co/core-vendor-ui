/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'rebass';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTheme } from 'styled-components';

import * as Styled from './ProductsPage.styled';
import { userActions } from '../../store/slices/userSlice';
import Typography from '../../components-export/Typography';
import ProductItem from '../../components/ProductItem';
import EditProduct from '../../components/EditProduct';
import { t } from 'i18next';
function ProductsPage({ connectedUser, setWantedRoute, products }) {
  // const { t } = useTranslation();
  const [activeProduct, setActiveProduct] = useState({});
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectedUser.userId) {
      setWantedRoute('/products');
      navigate('/login');
    }
  }, [connectedUser]);

  useEffect(() => {
    if (!activeProduct.id && products.length) {
      setActiveProduct(products[0]);
    }
  }, [products, activeProduct]);

  return (
    <Flex>
      <Flex
        width="20%"
        minWidth={'300px'}
        padding={theme.spacing06}
        flexDirection="column"
        style={{ borderRight: `1px solid ${theme.hover04}` }}
      >
        <Typography {...theme.titleBold}>{t('YOUR_PRODUCTS')}</Typography>
        <Flex width="100%" flexGrow={1} overflow="auto" flexDirection={'column'}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => {
                console.log('clicked');
                setActiveProduct(product);
              }}
            />
          ))}
        </Flex>
      </Flex>
      <Flex width={'80%'}>
        <EditProduct product={activeProduct} />
      </Flex>
    </Flex>
  );
}

ProductsPage.propTypes = {
  connectedUser: PropTypes.object.isRequired,
  setWantedRoute: PropTypes.func.isRequired,
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  connectedUser: state.user.connectedUser,
  products: state.products.products,
});

const mapDispatchProps = (dispatch) => ({
  setWantedRoute: bindActionCreators(userActions.setWantedRoute, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(ProductsPage);
