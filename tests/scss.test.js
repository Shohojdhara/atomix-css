const path = require('path');
const { globSync } = require('glob');
const sassTrue = require('sass-true');

describe('Sass', () => {
  const sassFiles = globSync('styles/**/*.spec.scss', {
    cwd: path.resolve(__dirname, '..'),
    absolute: true
  });

  sassFiles.forEach(file => {
    sassTrue.runSass(
      { describe, it },
      file,
      {
        loadPaths: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../node_modules/sass-true/sass')
        ]
      }
    );
  });
});
