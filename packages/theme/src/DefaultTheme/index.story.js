/* eslint react/no-array-index-key: 0 */
import React from 'react';
import styled from 'styled-components';
import _merge from 'lodash/merge';
import { storiesOf } from '@storybook/react';
import { lighten, darken } from '@design-system/utils';

import { DefaultTheme } from './index';
import { createTheme } from '../index';
import { STATUS_COLOR, THEME_COLOR } from './constant';

const theme = DefaultTheme;
console.log(theme);

const ColorContainer = styled.div`
  display: flex;
  text-align: center;
`;

const GroupWrapper = styled.div`
  padding: 20px;
`;

const ColorBadge = styled.div`
  padding: 5px 20px;
  color: ${props => props.textColor};
  font-size: 0.9em;
  background: ${props => props.color};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

const ColorTitle = styled.div`
  padding: 10px;
  font-weight: bold;
`;

const BadgeWrapper = styled.div`
  margin: 10px;
`;

const ColorCode = styled.div`
  padding: 10px 0;
  font-size: 0.8em;
`;

const ratioType = (colorCode, type) => {
  switch (type) {
    case 'light':
      return lighten(colorCode, theme.config.lightenRatio);

    case 'dark':
      return darken(colorCode, theme.config.lightenRatio);
    default:
      return colorCode;
  }
};

const Colors = ({ type, colors }) => {
  return (
    <ColorContainer>
      {colors.map(c => (
        <BadgeWrapper>
          <ColorBadge
            key={c}
            color={ratioType(theme.palette.colors[c], type)}
            textColor={theme.palette.contrastText[c]}
          >
            {c}
          </ColorBadge>
          <ColorCode>{ratioType(theme.palette.colors[c], type)}</ColorCode>
        </BadgeWrapper>
      ))}
    </ColorContainer>
  );
};

const stories = storiesOf('Themes|DefaultTheme', module);

stories.add(
  'Brand colors',
  () => {
    return (
      <React.Fragment>
        <GroupWrapper>
          <ColorTitle>Brand Colors</ColorTitle>
          <Colors type="color" colors={Object.values(THEME_COLOR)} />
          <ColorTitle>Brand Colors Light</ColorTitle>
          <Colors type="light" colors={Object.values(THEME_COLOR)} />
          <ColorTitle>Brand Colors Dark</ColorTitle>
          <Colors type="dark" colors={Object.values(THEME_COLOR)} />
        </GroupWrapper>
      </React.Fragment>
    );
  },
  {
    info: {
      text: `
  import { DefaultTheme } from '@design-system/themes';
`,
    },
  },
);

stories.add(
  'Status colors',
  () => {
    return (
      <React.Fragment>
        <GroupWrapper>
          <ColorTitle>Status Colors</ColorTitle>
          <Colors type="color" colors={Object.values(STATUS_COLOR)} />
          <ColorTitle>Status Colors Light</ColorTitle>
          <Colors type="light" colors={Object.values(STATUS_COLOR)} />
          <ColorTitle>Status Colors Dark</ColorTitle>
          <Colors type="dark" colors={Object.values(STATUS_COLOR)} />
        </GroupWrapper>
      </React.Fragment>
    );
  },
  {
    info: {
      text: `
  import { DefaultTheme } from '@design-system/themes';
`,
    },
  },
);