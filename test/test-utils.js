import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '@design-system/theme';

import './global';
console.log(DefaultTheme);
const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
