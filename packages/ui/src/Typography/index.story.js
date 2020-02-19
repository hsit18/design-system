import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from './index';
import { select, boolean } from '@storybook/addon-knobs';
import {
  typographyVariants,
  typographyAlign,
  allColorVariants,
} from '../../../theme/src/DefaultTheme/storyUtils';

export default {
  component: Typography,
  title: 'UI|Typography',
  parameters: {
    componentSubtitle: `import { Typography } from '@design-system/ui`,
  },
};

export const basic = () => (
  <Typography
    variant={select(...typographyVariants('Variant', 'body'))}
    color={select(...allColorVariants('Body Color'))}
    align={select(...typographyAlign('Align'))}
  >
    Variant Heading
  </Typography>
);

export const withTruncate = () => (
  <Typography
    variant={select(...typographyVariants('Variant', 'body'))}
    color={select(...allColorVariants('Body Color'))}
    align={select(...typographyAlign('Align'))}
    truncate={boolean('Truncate', true)}
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </Typography>
);
