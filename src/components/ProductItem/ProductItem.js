import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Flex, Box } from 'rebass';

import image from '../../assets/NotFound.png';
import Typography from '../../components-export/Typography';
import { Container } from './ProductItem.styled';

function ProductItem({ product, onClick }) {
  const theme = useTheme();

  return (
    <Container onClick={onClick}>
      <Box height={'100%'}>
        <img src={image} height={'100%'} />
      </Box>
      <Flex
        height="100%"
        paddingLeft={theme.spacing02}
        flexDirection="column"
        alignItems="start"
        justifyContent={'flex-start'}
      >
        <Typography>{product.name}</Typography>
      </Flex>
    </Container>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

ProductItem.defaultProps = {
  onClick: () => {},
};

export default ProductItem;
