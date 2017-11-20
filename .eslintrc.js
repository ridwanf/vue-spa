module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    //disable rule of space before function parentheses
    'space-before-function-paren': 0
  },
  extends: 'standard',
  //required to lint *.vue files
  plugins: ['html']
}
