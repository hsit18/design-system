import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { allColorVariants } from '../../../theme/src/DefaultTheme/storyUtils';

import { Button } from './index';

export default {
  component: Button,
  title: 'UI|Button',
  parameters: {notes: `import { Button } from '@design-system/ui`}
};

export const variants = () => (
  <Button
    color={select(...allColorVariants())}
    size={select('Size', ['large', 'medium', 'small'], 'medium')}
    loading={boolean('Loading', true)}
    disabled={boolean('Disabled', false)}
    block={boolean('Block', false)}
    outline={boolean('Outline', false)}
    onClick={action('button-click')}
    flat={boolean('Flat', false)}
  >
    Agrostar
  </Button>
);

