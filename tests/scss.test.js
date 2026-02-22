const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  const sassTestFiles = globSync(path.resolve(__dirname, '**/*.spec.scss'));
  sassTestFiles.forEach(file =>
    sassTrue.runSass({ describe, it }, file, { loadPaths: [path.resolve(__dirname, '../node_modules')] })
  );
});
