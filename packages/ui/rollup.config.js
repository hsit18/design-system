import { getRollupConfig } from '../../config/rollup';
import pkg from './package.json';

export default getRollupConfig({
  pwd: __dirname,
  name: 'UI',
  buildName: 'design-system-ui',
  pkg,
});
