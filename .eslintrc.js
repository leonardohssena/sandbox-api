module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    semi: [
      'error',
      'never'
    ],
    'comma-dangle': 0,
    'no-console': 0,
    'no-underscore-dangle': 0
  },
}
