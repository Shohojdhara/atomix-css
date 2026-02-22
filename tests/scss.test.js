const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  // Find all .spec.scss files in the tests directory
  const sassTestFiles = globSync('tests/**/*.spec.scss', { cwd: process.cwd() });

  sassTestFiles.forEach(file => {
    sassTrue.runSass(
      { describe, it },
      path.resolve(process.cwd(), file),
      { loadPaths: [path.resolve(process.cwd(), 'node_modules')] }
    );
  });
});
