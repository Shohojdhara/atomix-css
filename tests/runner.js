const path = require('path');
const sassTrue = require('sass-true');
const { globSync } = require('glob');

const testFiles = globSync(path.resolve(__dirname, 'scss/**/*.scss'));

testFiles.forEach(file => {
  sassTrue.runSass(
    { describe, it },
    file,
    {
      loadPaths: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(__dirname, '../styles')
      ]
    }
  );
});
