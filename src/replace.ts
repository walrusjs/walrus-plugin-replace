const replace = require('replace-in-file');

export default async function (options) {
  try {
    const results = await replace(options);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}
