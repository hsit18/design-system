import _merge from 'lodash/merge';

import { STATUS_COLOR, THEME_COLOR, TEXT_COLOR, BORDER } from './constant';

const colors = {
  [THEME_COLOR.PRIMARY]: '#cc3654',
  [THEME_COLOR.SECONDARY]: '#0caf78',
  [THEME_COLOR.DEFAULT]: '#e9eaec',
  [THEME_COLOR.WHITE]: '#ffffff',
  [THEME_COLOR.BLACK]: '#000000',
  [STATUS_COLOR.SUCCESS]: '#34cc99',
  [STATUS_COLOR.ERROR]: '#cc3654',
  [STATUS_COLOR.INFO]: '#4765f1',
  [STATUS_COLOR.WARNING]: '#4765f1',
  [TEXT_COLOR.BODY]: '#000',
  [TEXT_COLOR.SUBTEXT]: '#aaadb4',
};

const contrastText = {
  [THEME_COLOR.PRIMARY]: colors[THEME_COLOR.WHITE],
  [THEME_COLOR.SECONDARY]: colors[THEME_COLOR.WHITE],
  [THEME_COLOR.DEFAULT]: colors[THEME_COLOR.BLACK],
  [THEME_COLOR.WHITE]: colors[THEME_COLOR.BLACK],
  [THEME_COLOR.BLACK]: colors[THEME_COLOR.WHITE],
  [STATUS_COLOR.SUCCESS]: colors[THEME_COLOR.WHITE],
  [STATUS_COLOR.ERROR]: colors[THEME_COLOR.WHITE],
  [STATUS_COLOR.INFO]: colors[THEME_COLOR.WHITE],
  [STATUS_COLOR.WARNING]: colors[THEME_COLOR.WHITE],
};

const borderColors = {
  [BORDER.DEFAULT]: '#e9eaec',
  [BORDER.DIVIDER]: '#e9eaec',
  [BORDER.DARK]: '#e9eaec',
  [BORDER.LIGHT]: '#bfc1c6',
};

export default {
  colors,
  contrastText,
  borderColors,
};
