module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2018,
      ecmaFeatures: { jsx: true }
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-var': 0,
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
      '@typescript-eslint/camelcase': 0,
      'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true, printWidth: 120 }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    globals: {
      describe: false,
      it: false,
      expect: false,
      beforeEach: false,
      afterEach: false,
      beforeAll: false,
      afterAll: false,
      jest: false
    }
  };