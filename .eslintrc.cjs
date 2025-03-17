module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', 
      'prettier', 
    ],
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'prettier',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    ignorePatterns: ['dist'], 
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
          '@typescript-eslint/no-unused-vars': ['warn'],
          '@typescript-eslint/explicit-module-boundary-types': 'off', 
        },
      },
    ],
  }
  