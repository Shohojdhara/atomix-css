const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  // Find all .test.scss files in tests directory
  const sassTestFiles = globSync('tests/**/*.test.scss');

  sassTestFiles.forEach(file => {
    sassTrue.runSass(
      { describe, it },
      file,
      { loadPaths: ['node_modules'] }
    );
  });
});
