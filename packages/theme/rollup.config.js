import { getRollupConfig } from '../../config/rollup';
import pkg from './package.json';

export default getRollupConfig({
  pwd: __dirname,
  name: 'Theme',
  buildName: 'design-system-theme',
  pkg,
});
