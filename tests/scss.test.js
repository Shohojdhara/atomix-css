const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  const sassTestFiles = globSync('**/*.test.scss', { cwd: __dirname });

  sassTestFiles.forEach(file => {
    sassTrue.runSass(
      { describe, it },
      path.join(__dirname, file),
      { loadPaths: ['node_modules'] }
    );
  });
});
