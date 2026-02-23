const sassTrue = require('sass-true');
const { globSync } = require('glob');

const sassTestFiles = globSync('tests/scss/**/*.scss');

sassTestFiles.forEach(file => {
  sassTrue.runSass({ describe, it }, file, {
    loadPaths: ['node_modules']
  });
});
