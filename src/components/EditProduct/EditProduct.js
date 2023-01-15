import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { useTheme } from 'styled-components';
import { Flex } from 'rebass';

import Typography from '../../components-export/Typography';

function EditProduct({ product }) {
  const theme = useTheme();

  return (
    <Flex padding={theme.spacing04}>
      <Typography {...theme.title}>{`${t('EDITING_PRODUCT_WITH_ID')}: ${product.id}`} </Typography>
    </Flex>
  );
}

EditProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default EditProduct;
