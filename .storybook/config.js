import React from 'react';

import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';

// addParameters({
//   options: {
//     theme: customTheme,
//   },
// });

addDecorator(withKnobs);
addDecorator(withA11y);

addDecorator(story => (
  <ThemeProvider theme={{}}>
    <React.Fragment>
      <GlobalStyle />
      <div style={{ height: 500, margin: 40 }}>{story()}</div>
    </React.Fragment>
  </ThemeProvider>
));

configure(
  [
    require.context('../packages', true, /\.story\.js$/)
  ],
  module,
);
