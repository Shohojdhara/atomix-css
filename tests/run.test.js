const path = require('path');
const glob = require('glob');
const sassTrue = require('sass-true');

const sassFiles = glob.sync(path.join(__dirname, '**/*.test.scss'));

sassFiles.forEach(file => {
  sassTrue.runSass(
    { describe, it },
    file,
    { loadPaths: ['node_modules'] }
  );
});
