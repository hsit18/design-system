import styled, { css } from 'styled-components';
import { lighten, darken } from '@design-system/utils';

const BUTTON_SIZE = {
  small: {
    padding: '4px 8px',
  },
  medium: {
    padding: '8px 16px',
  },
  large: {
    padding: '12px 28px',
  },
};

export const ButtonElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.palette.contrastText[props.color]};
  ${props => props.theme.typography[props.variant]}
  background: ${props => props.theme.palette.colors[props.color]};
  border: 1px solid transparent;
  ${props =>
    !props.flat &&
    css`
      border-radius: ${props => props.theme.config.borderRadius};
    `}
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  ${props =>
    props.block &&
    css`
      width: 100%;
    `}
  ${props => BUTTON_SIZE[props.size]}

  svg {
    margin: ${props => props.theme.spacing(0, 1.5)};
  }

  &:hover {
    background:
      ${props =>
        darken(
          props.theme.palette.colors[props.color],
          props.theme.config.darkenRatio,
        )};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${props =>
      lighten(props.theme.palette.colors[props.color], 0.3)};
  }
  ${props =>
    props.outline &&
    css`
      color: ${props.theme.palette.colors[props.color]};
      background: ${props.theme.palette.colors.white};
      border-color: ${props.theme.palette.colors[props.color]};
      &:hover {
        background: ${props =>
          lighten(props.theme.palette.colors[props.color], 0.9)};
      }
    `}
`;
