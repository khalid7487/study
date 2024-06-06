module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'prettier', 'react', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
    'no-console': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'no-empty-function': 'error',
    quotes: ['warn', 'single', {avoidEscape: true}],
    'prefer-const': 'off',
    'no-dupe-keys': 'warn',
    'react/react-in-jsx-scope': ['off'],
    'no-duplicate-imports': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': ['error'],
    'valid-typeof': ['error', {requireStringLiterals: true}],

    'prettier/prettier': ['warn'],

    // 'import/no-unresolved': ['warn', {caseSensitive: false}],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@core/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
      },
    ],
    'import/no-named-as-default-member': ['off'],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowNew: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        // @alwaysTryTypes always try to resolve types under `<root>@types`
        // directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
        project: './tsconfig.json',
        extensions: ['.ts', '.tsx'],
      },
    },
  },
}
// module.exports = {
//   root: true,
//   env: {browser: true, es2020: true},
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh', 'import', 'prettier', 'react', '@typescript-eslint'],
//   rules: {
//     'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
//     'no-console': 'warn',
//     'arrow-body-style': ['warn', 'as-needed'],
//     'no-empty-function': 'error',
//     quotes: ['warn', 'single', {avoidEscape: true}],
//     'prefer-const': 'off',
//     'no-dupe-keys': 'warn',
//     'react/react-in-jsx-scope': ['off'],
//     'no-duplicate-imports': ['warn'],
//     '@typescript-eslint/no-unused-vars': ['warn'],
//     '@typescript-eslint/no-explicit-any': ['error'],
//     'valid-typeof': ['error', {requireStringLiterals: true}],
//     'prettier/prettier': ['warn'],
//     'import/order': [
//       'warn',
//       {
//         groups: ['external', 'internal', ['parent', 'sibling', 'index']],
//         'newlines-between': 'always',
//         // pathGroups: [
//         //   {
//         //     pattern: '@core/**',
//         //     group: 'internal',
//         //     position: 'before',
//         //   },
//         //   {
//         //     pattern: 'component/**',
//         //     group: 'internal',
//         //     position: 'before',
//         //   },
//         // ],
//         pathGroupsExcludedImportTypes: ['builtin'],
//         alphabetize: {
//           order: 'asc',
//           caseInsensitive: true,
//         },
//       },
//     ],
//     'import/no-named-as-default-member': ['off'],
//     'import/no-anonymous-default-export': [
//       'error',
//       {
//         allowArray: false,
//         allowArrowFunction: false,
//         allowAnonymousClass: false,
//         allowAnonymousFunction: false,
//         allowCallExpression: true,
//         allowNew: false,
//         allowLiteral: false,
//         allowObject: false,
//       },
//     ],
//   },
// }
