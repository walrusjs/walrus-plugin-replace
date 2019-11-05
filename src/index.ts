import { API } from '@walrus/types';
import replace, { ReplaceInFileConfig as ReplaceOptions } from 'replace-in-file';

const successHandler = require('replace-in-file/lib/helpers/success-handler');
const errorHandler = require('replace-in-file/lib/helpers/error-handler');
const combineConfig = require('replace-in-file/lib/helpers/combine-config');

export default function(api: API) {
  api.registerCommand('replace', {
    description: 'replace files contents',
    usage: 'walrus replace [options] [...files]',
    options: {
      '--form [form]': 'replace form',
      '--to [to]': 'replace target',
      '--ignore [ignore]': 'ignore files',
      '--is-regex': 'form is regex. (defaults false)',
      '--verbose': 'To list the changed files. (defaults true)',
      '--encoding': 'Specify character encoding. (defaults utf-8)'
    }
  }, (args, rawArgv, options = {}) => {
    try {
      const config = combineConfig(options, args);
      const results = replace.sync(config as ReplaceOptions);
      successHandler(results, true);
    }
    catch (error) {
      errorHandler(error);
    }
  })
}

export {
  ReplaceOptions
}
