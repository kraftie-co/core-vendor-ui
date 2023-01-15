import styled from 'styled-components';
import { Flex } from 'rebass';

import background from '../../assets/AuthBackground.jpg';

const Container = styled(Flex).attrs(() => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
}))`
  background-image: ${`url(${background})`};
  background-size: cover;
`;

const FormCard = styled(Flex).attrs(({ theme }) => ({
  height: '80%',
  width: '500px',
  marginRight: '10%',
  backgroundColor: theme.ui02,
  padding: theme.spacing07,
}))`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export { Container, FormCard };
