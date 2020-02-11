/* eslint react/no-array-index-key: 0 */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { lighten, darken } from '@ag-design-system/utils';
import { createAgDesignTheme } from './index';
import { STATUS_COLOR, THEME_COLOR } from './constant';

const theme = createAgDesignTheme();
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
          <ColorCode>
            {ratioType(theme.palette.colors[c], type)}
          </ColorCode>
        </BadgeWrapper>
      ))}
    </ColorContainer>
  );
};

const stories = storiesOf('Themes|Themes', module);

stories.add(
  'colors',
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
  import { Themes } from '@ag-design-system/themes';
`,
    },
  },
);
