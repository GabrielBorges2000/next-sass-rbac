/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort'],
  rules: {
    camelcase: 'off',
    'simple-import-sort/imports': 'error',
  },
}
