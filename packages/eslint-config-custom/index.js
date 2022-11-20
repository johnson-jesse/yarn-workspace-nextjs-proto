module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, jsxSingleQuote: true, printWidth: 120, trailingComma: 'none', arrowParens: 'avoid' }
    ]
  },
  plugins: ['prettier']
};
