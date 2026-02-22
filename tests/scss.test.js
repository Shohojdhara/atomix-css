const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'scss/test_spacing.scss');
sassTrue.runSass(
  { describe, it },
  sassFile,
  { loadPaths: ['node_modules'] }
);
