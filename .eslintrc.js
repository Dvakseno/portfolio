module.exports = {
  ignorePatterns: ['/config/'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'arrow-spacing': 'error',
    semi: 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        arrowParens: 'avoid',
        printWidth: 120,
      },
    ],
    indent: ['error', 2],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@components', './src/components']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
