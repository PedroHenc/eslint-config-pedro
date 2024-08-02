module.exports = {
    env: {
      browser: true,
      es2024: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'standard',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      'react',
      'jsx-a11y',
      '@typescript-eslint',
      "pluginN",
      "pluginImport",
      "pluginPromise"
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
      "react/self-closing-comp": "error",
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
      'react/jsx-key': 'warn',
      'no-self-compare': 'warn',
      'no-undef': 'warn',
      'no-use-before-define': 'off',
      'no-constant-binary-expression': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unknown-property': 'error',
      'prettier/prettier': ["error", {
        'printWidth': 80,
        'tabWidth': 2,
        'singleQuote': true,
        'trailingComma': 'all',
        'arrowParens': 'always',
        'semi': false,
        'endOfLine': 'auto',
      }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
    'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'react/no-unknown-property': 'error',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
            'object',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '{**/*.css,**/*.scss}',
              group: 'object',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'type'],
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
      },
    },
    ignorePatterns: [
      'node_modules'
    ]
  }