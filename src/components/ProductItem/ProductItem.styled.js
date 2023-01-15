import styled from 'styled-components';
import { Flex } from 'rebass';

const Container = styled(Flex).attrs(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  padding: theme.spacing03,
  marginTop: theme.spacing03,
  height: '75px',
}))`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.hover02};
  }
`;

export { Container };
