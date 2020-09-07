module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  plugins: ['vue'],
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'max-len': ['error', 130, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    '@typescript-eslint/no-var-requires': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'no-continue': 'off',
    'no-else-return': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off', // TODO 해결방법 확인/검토 후, 해당 rule 제거
    'import/no-extraneous-dependencies': 'off', // TODO vue,vuex 명시적으로 package.json에 정의 후, 해당 rule 제거
    'class-methods-use-this': 'off', // TODO XXXClient에서 실제 request가 아닌 상수 return하는 로직 제거 후, 해당 rule 제거
    'import/no-unresolved': 'off', // TODO `import XXX from '~/XXX'` 로직 제거 후, 해당 rule 제거
    'import/extensions': 'off', // TODO `import XXX from '~/XXX'` 로직 제거 후, 해당 rule 제거
  },
};
