import { IApi, IConfig } from '@walrus/types';
import replace from './replace';

export default function(
  api: IApi,
  config: IConfig
) {
  api.registerCommand('replace', {
    description: 'replace files keywords',
    usage: 'walrus replace [options] [...files]',
  }, (args, rawArgv, config) => {
    replace(config).then(() => {});
  })
}
