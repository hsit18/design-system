import _merge from 'lodash/merge';

import defaultConfig from './config';

const createDesignTheme = ({
  palette = {},
  typography = {},
  config = {},
} = {}) => ({
  config: _merge(defaultConfig, config),
  palette: palette,
  typography: typography,
});
export default createDesignTheme;
