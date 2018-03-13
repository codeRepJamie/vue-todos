// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  'rules': {
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': 0,
    'indent': 0,
    'space-before-function-paren': 0,
    'no-tabs': 0,
    'eol-last': 0,
    'spaced-comment': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'padded-blocks': 0,
    'one-var': 0,
  }
};
