import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './Typography.styled';

function Typography({ children, ...otherProps }) {
  return <Text otherProps={otherProps}>{children}</Text>;
}

Typography.propTypes = {
  children: PropTypes.node || PropTypes.string,
  otherProps: PropTypes.object,
};

Typography.defaultProps = {
  children: '',
  otherProps: {},
};

export default Typography;
