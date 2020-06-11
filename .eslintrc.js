module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  rules: {},
};
