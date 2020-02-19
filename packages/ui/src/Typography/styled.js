import styled, { css } from 'styled-components';

export const Element = styled.p`
  margin: 0;
  ${props => props.theme.typography[props.variant]}
  cursor: ${props => props.cursor};
  ${props =>
    props.truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.theme.palette.colors[props.color]};
    `}

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}

  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}

  ${props =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}

  ${props =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

  ${props =>
    props.fontStyle &&
    css`
      font-style: ${props.fontStyle};
    `}
`;

export default Element;
