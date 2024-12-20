import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends(
    'prettier',
  ),
  {
    plugins: {
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
        NodeJS: 'readable',
        Mocha: 'readable'
      },

      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: false
      }
    },

    settings: {
      'import/extensions': ['.js', '.ts', '.tsx'],

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },

      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.tsx']
        }
      }
    }
  },
  {
    files: ['sdk.gen.ts'],
    rules: {
      'prettier/prettier': 'error',
      'no-trailing-spaces': 'error',
    }
  }
]
