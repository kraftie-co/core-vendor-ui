import styled from 'styled-components';

const Text = styled.p`
  ${({ theme }) => ({ ...theme.body })};
  color: ${({ theme }) => theme.textColor01};
  ${({ otherProps }) => ({ ...otherProps })};
`;

export { Text };
