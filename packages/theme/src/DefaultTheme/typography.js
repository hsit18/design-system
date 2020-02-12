import { TYPOGRAPHY } from './constant';

const FontWeight = {
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
};

const DEFAULT_TYPOGRAPHY = {
  [TYPOGRAPHY.H1]: {
    fontSize: 20,
    fontWeight: FontWeight.BOLD,
  },
  [TYPOGRAPHY.H2]: {
    fontSize: 16,
    fontWeight: FontWeight.BOLD,
  },
  [TYPOGRAPHY.H3]: {
    fontSize: 14,
    fontWeight: FontWeight.BOLD,
  },
  [TYPOGRAPHY.BODY]: {
    fontSize: 12,
    fontWeight: FontWeight.REGULAR,
  },
  [TYPOGRAPHY.LABEL]: {
    fontSize: 12,
    fontWeight: FontWeight.BOLD,
  },
  [TYPOGRAPHY.SUBTEXT]: {
    fontSize: 12,
    fontWeight: FontWeight.REGULAR,
  },
  [TYPOGRAPHY.HELP]: {
    fontSize: 10,
    fontWeight: FontWeight.REGULAR,
  },
  [TYPOGRAPHY.BUTTON]: {
    fontSize: 14,
    fontWeight: FontWeight.REGULAR,
    textTransform: 'uppercase',
  },
};

const pxToRem = size => `${size / rootSize}rem`;

export default {
  pxToRem,
  ...DEFAULT_TYPOGRAPHY,
};
