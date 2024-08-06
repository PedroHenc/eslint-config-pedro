import pluginJs from '@eslint/js';
import configStandard from 'eslint-config-standard';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginN from 'eslint-plugin-n';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const pluginStandard = {
  plugins: {
    n: pluginN,
    import: pluginImport,
    promise: pluginPromise,
  },
  rules: configStandard.rules,
};

export default [
  { ignores: ['node_modules/', 'dist/'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // pluginHooks,
  pluginStandard,
  ...tsEslint.configs.recommended,
  pluginPrettierRecommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: { 'jsx-a11y': pluginJsxA11y },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/self-closing-comp': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
      'react/jsx-key': 'warn',
      'no-self-compare': 'warn',
      'no-undef': 'warn',
      'no-use-before-define': 'off',
      'no-constant-binary-expression': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unknown-property': 'error',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          endOfLine: 'auto',
          parser: 'typescript',
        },
      ],
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
              pattern: './assets/**',
              group: 'internal',
              position: 'before',
            },
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
  },
];
