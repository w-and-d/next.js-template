/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/display-name': ['off', { ignoreTranspilerName: true }],
    'react/react-in-jsx-scope': 'off',
    quotes: ['warn', 'single'],
    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
