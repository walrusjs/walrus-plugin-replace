import { IConfig } from '@walrus/types';
import { join } from 'path';

const config: IConfig = {
  plugins: [
    [join(__dirname, './lib/index.js')]
  ]
};

export default config;
