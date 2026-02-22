const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

describe('Sass', () => {
  // Find all .spec.scss files in styles directory
  const sassTestFiles = glob.sync(path.resolve(__dirname, '../styles/**/*.spec.scss'));

  sassTestFiles.forEach(file =>
    sassTrue.runSass({ describe, it }, file, { loadPaths: ['node_modules'] })
  );
});
