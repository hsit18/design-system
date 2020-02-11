import { getRollupConfig } from '../../config/rollup';
import pkg from './package.json';

export default getRollupConfig({
  pwd: __dirname,
  name: 'Utils',
  buildName: 'design-system-utils',
  pkg,
});
