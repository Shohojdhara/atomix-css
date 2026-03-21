const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

describe('Sass', () => {
  const sassTestFiles = globSync(path.resolve(__dirname, '../styles/**/*.test.scss'));
  sassTestFiles.forEach(file =>
    sassTrue.runSass(
      { describe, it },
      file,
      { loadPaths: ['node_modules'] }
    )
  );
});
