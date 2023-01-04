module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-danger': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    // 'no-unused-vars': 0,
  },
};
