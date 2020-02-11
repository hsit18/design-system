import { THEME_COLOR, STATUS_COLOR, TEXT_COLOR, TYPOGRAPHY } from './constant';

export const typographyVariants = (
  label = 'Variant',
  defaultValue = TYPOGRAPHY.BODY,
) => {
  const values = Object.values(TYPOGRAPHY);
  return [label, values, defaultValue];
};

export const allColorVariants = (
  label = 'Color',
  defaultValue = THEME_COLOR.PRIMARY,
) => {
  const values = Object.values({ ...THEME_COLOR, ...STATUS_COLOR, ...TEXT_COLOR });
  return [label, values, defaultValue];
};

export const themeColorVariants = (
  label = 'Color',
  defaultValue = THEME_COLOR.PRIMARY,
) => {
  const values = Object.values(THEME_COLOR);
  return [label, values, defaultValue];
};

export const statusColorVariants = (
  label = 'Color',
  defaultValue = STATUS_COLOR.ERROR,
) => {
  const values = Object.values(STATUS_COLOR);
  return [label, values, defaultValue];
};

export const typographyAlign = (label = 'Align', defaultValue = 'left') => [
  label,
  ['right', 'center', 'left'],
  defaultValue,
];

export const placementsSelect = (
  label = 'Placement',
  defaultValue = 'right',
) => [label, ['top', 'left', 'bottom', 'right'], defaultValue];
