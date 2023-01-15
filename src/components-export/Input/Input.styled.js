import styled from 'styled-components';

const InputStyled = styled.input`
  ${({ theme }) => ({ ...theme.body })};
  border: 1px solid ${({ theme }) => theme.ui01};
  background-color: ${({ theme }) => theme.ui2};
  padding: ${({ theme }) => theme.spacing04};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:focus {
    outline: none;
  }
  ${({ error }) => error && `border: 1px solid red;`};
  ${({ disabled }) => disabled && `background-color: #f5f5f5;`};
  ${({ otherProps }) => otherProps};
`;

export { InputStyled };
