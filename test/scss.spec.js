const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');
const sass = require('sass');

describe('Sass', () => {
  const sassTestFiles = glob.sync(path.resolve(__dirname, '../styles/**/*.test.scss'));

  sassTestFiles.forEach(file => {
    sassTrue.runSass({ describe, it, sass }, file);
  });
});
