const path = require('path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2020: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'config', 'webpack.common.js'),
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'jest'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
