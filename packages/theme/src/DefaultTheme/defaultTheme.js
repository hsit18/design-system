import _merge from 'lodash/merge';
import { createTheme } from '../index';

export default createTheme({
  config: {
    zIndex: {
      modal: 500,
    },
    font: {
      rootSize: 16,
      family: 'Montserrat,sans-serif',
    },
  },
  palette: {
    colors: {
      primary: '#cc3654',
      secondary: '#0caf78',
      default: '#e9eaec',
    },
    contrastText: {
      primary: '#ffffff',
      secondary: '#ffffff',
      default: '#000000',
    },
    borders: {
      divider: {
        color: '#e9eaec',
        style: 'solid',
        width: '1px',
      },
    },
  },
  typography: {
    h2: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    button: {
      fontSize: 14,
      fontWeight: 'regular',
      textTransform: 'uppercase',
    },
  },
});
