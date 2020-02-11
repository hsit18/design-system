import { css } from 'styled-components';

const validateBreakpoint = breakpointValue => {
  if (parseInt(breakpointValue, 10)) {
    return breakpointValue;
  }
  console.error(
    'styled-media-query: No valid breakpoint or size specified for media.',
    breakpointValue,
  );
  return '0';
};

export const lessThan = breakpoint => (...args) => css`
  @media (max-width: ${validateBreakpoint(breakpoint)}) {
    ${css(...args)}
  }
`;

export const greaterThan = breakpoint => (...args) => css`
  @media (min-width: ${validateBreakpoint(breakpoint)}) {
    ${css(...args)}
  }
`;

export const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
  @media (min-width: ${validateBreakpoint(
      firstBreakpoint,
    )}) and (max-width: ${validateBreakpoint(secondBreakpoint)}) {
    ${css(...args)}
  }
`;
