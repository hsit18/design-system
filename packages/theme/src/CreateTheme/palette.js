export const COLOR_STRINGS = {
  /* theme colors */
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  /* standard colors */
  WHITE: 'white',
  BLACK: 'black',
  /* status colors */
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
  /* text colors */
  BODY: 'body',
  SUBTEXT: 'subtext',
};

const colors = {
  [COLOR_STRINGS.PRIMARY]: '#cc3654',
  [COLOR_STRINGS.SECONDARY]: '#0caf78',
  [COLOR_STRINGS.DEFAULT]: '#e9eaec',
  [COLOR_STRINGS.WHITE]: '#ffffff',
  [COLOR_STRINGS.BLACK]: '#000000',
  [COLOR_STRINGS.SUCCESS]: '#34cc99',
  [COLOR_STRINGS.ERROR]: '#cc3654',
  [COLOR_STRINGS.INFO]: '#4765f1',
  [COLOR_STRINGS.WARNING]: '#4765f1',
  [COLOR_STRINGS.BODY]: '#000',
  [COLOR_STRINGS.SUBTEXT]: '#aaadb4',
};

const contrastText = {
  [COLOR_STRINGS.PRIMARY]: '#ffffff',
  [COLOR_STRINGS.SECONDARY]: '#ffffff',
  [COLOR_STRINGS.DEFAULT]: '#000000',
  [COLOR_STRINGS.WHITE]: '#000000',
  [COLOR_STRINGS.BLACK]: '#ffffff',
  [COLOR_STRINGS.SUCCESS]: '#ffffff',
  [COLOR_STRINGS.ERROR]: '#ffffff',
  [COLOR_STRINGS.INFO]: '#ffffff',
  [COLOR_STRINGS.WARNING]: '#ffffff',
};

const borders = {
  default: {
    color: '#e9eaec',
    style: 'solid',
    width: '1px',
  },
};

export default {
  colors,
  contrastText,
  borders,
};
