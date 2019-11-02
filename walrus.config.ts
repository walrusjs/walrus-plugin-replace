import { IConfig } from '@walrus/types';
import { join } from 'path';

const config: IConfig = {
  plugins: [
    [join(__dirname, './dist/index.js'), {
      files: 'example/**/*',
      from: /foo/g,
      to: 'bar',
    }]
  ]
};

export default config;
