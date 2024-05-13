/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: {
    camelcase: 'off',
    'simple-import-sort/imports': 'error',
  },
}
