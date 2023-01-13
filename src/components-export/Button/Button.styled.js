import styled from 'styled-components';

import Typography from '../Typography/Typography';
import { BUTTON_TYPES } from './constants';

const BUTTON_TYPE_TO_THEME = (theme) => ({
  [BUTTON_TYPES.PRIMARY]: {
    backgroundColor: theme.ui01,
    hoverBackgroundColor: theme.hover01,
    color: theme.textColor03,
    hoverColor: theme.textColor03,
  },
  [BUTTON_TYPES.SECONDARY]: {
    backgroundColor: theme.ui02,
    hoverBackgroundColor: theme.hover02,
    color: theme.textColor01,
    hoverColor: theme.textColor01,
  },
  [BUTTON_TYPES.DESTRUCTIVE]: {
    backgroundColor: theme.ui05,
    hoverBackgroundColor: theme.hover05,
    color: theme.textColor03,
    hoverColor: theme.textColor01,
  },
});

const CustomButton = styled.button`
  & {
    border: '0px solid transparent';
    padding-top: ${({ theme }) => theme.spacing02};
    padding-bottom: ${({ theme }) => theme.spacing02};
    padding-left: ${({ theme }) => theme.spacing04};
    padding-right: ${({ theme }) => theme.spacing04};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme, type, isInFocus }) =>
      isInFocus
        ? BUTTON_TYPE_TO_THEME(theme)[type].hoverBackgroundColor
        : BUTTON_TYPE_TO_THEME(theme)[type].backgroundColor};
    ${({ otherProps }) => ({ ...otherProps })};
  }
`;

const CustomTypography = styled(Typography).attrs(({ theme, type, isInFocus }) => ({
  color: isInFocus ? BUTTON_TYPE_TO_THEME(theme)[type].hoverColor : BUTTON_TYPE_TO_THEME(theme)[type].color,
}))``;

export { CustomButton, CustomTypography };
