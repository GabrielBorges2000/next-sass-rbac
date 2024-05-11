/** @typedef {import('prettier').config} PrettierConfig*/

/** @type { PrettierConfig } */
const config = {
  plugin: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: true,
  trailingComma: "es5",
  backetSpacing: true, // espaço entre chaves
  arrowParens: 'always',
  endOfline: 'auto',
  backetSameline: true,
}

export default config;