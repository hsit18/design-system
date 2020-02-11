import _merge from 'lodash/merge';
import { createDesignTheme } from '../index';

import config from './config';
import palette from './palette';
import typography from './typography';

export default createDesignTheme({
  config,
  palette,
  typography,
});
