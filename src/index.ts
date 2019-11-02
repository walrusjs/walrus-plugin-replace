import { IApi, IConfig } from '@walrus/types';
import replace, { ReplaceInFileConfig as ReplaceOptions } from 'replace-in-file';

export default function(api: IApi, config: IConfig) {
  api.registerCommand('replace', {
    description: 'replace files keywords',
    usage: 'walrus replace [options] [...files]',
  }, (args, rawArgv, config) => {
    try {
      const results = replace.sync(config as ReplaceOptions);
      console.log('Replacement results:', results);
    }
    catch (error) {
      console.error('Error occurred:', error);
    }
  })
}

export {
  ReplaceOptions
}
