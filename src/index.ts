import { IApi, IConfig } from '@walrus/types';

export default function(
  api: IApi,
  config: IConfig
) {
  api.registerCommand('replace', {
    description: 'replace files keywords',
    usage: 'walrus replace [options] [...files]',
  }, (args, rawArgv) => {
    console.log(args);
  })
}
