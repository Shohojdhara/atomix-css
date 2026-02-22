const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  // Find all of the Sass files
  const sassTestFiles = globSync('tests/**/*.test.scss');

  // Run each file with sass-true
  sassTestFiles.forEach(file => {
    sassTrue.runSass(
      { describe, it },
      path.resolve(process.cwd(), file),
      { loadPaths: ['node_modules'] }
    );
  });
});
