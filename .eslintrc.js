module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-cycle': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.config.js'] }],
    'camelcase': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};

