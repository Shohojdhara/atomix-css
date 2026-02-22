const path = require('path');
const { globSync } = require('glob');
const sassTrue = require('sass-true');

describe('Sass', () => {
  const sassTestFiles = globSync('styles/**/*.test.scss');

  sassTestFiles.forEach(file => {
    sassTrue.runSass({ describe, it }, file);
  });
});
