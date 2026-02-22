const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  // Find all of the Sass files that end in `test.scss` in any directory
  const sassTestFiles = globSync('styles/**/*.test.scss');

  sassTestFiles.forEach(file => {
    sassTrue.runSass({ describe, it }, file, { loadPaths: ['node_modules'] });
  });
});
