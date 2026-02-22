const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, '_tools.grid.test.scss');
sassTrue.runSass(
  { describe, it },
  sassFile,
  { loadPaths: [path.join(__dirname, '../../node_modules')] }
);
