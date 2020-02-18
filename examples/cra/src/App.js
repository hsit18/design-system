import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '@design-system/ui';
import { DefaultTheme } from '@design-system/theme';

import GlobalStyle from './globalStyle';
import { Test } from './styled';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div>
        <GlobalStyle />
        <Test>Hello</Test>
        <Button>World</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
