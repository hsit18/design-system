import _merge from 'lodash/merge';
import { spacing } from '@design-system/utils';

import config from './config';
import palette from './palette';
import typography from './typography';

const createTheme = (overrides = {}) => {
  const themeObj = _merge({ config, palette, typography }, overrides);
  return {
    ...themeObj,
    spacing: spacing(themeObj.config.spacing),
    pxToRem: size => `${size / themeObj.config.font.rootSize}rem`,
  };
};

export default createTheme;
