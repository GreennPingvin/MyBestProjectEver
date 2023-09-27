module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid'] },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/indent': 'off',
  },
}
