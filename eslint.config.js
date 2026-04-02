import { defineConfig } from '@tofrankie/eslint'
import vitest from '@vitest/eslint-plugin'

export default defineConfig(
  {
    typescript: false,
    jsdoc: false,
    rules: {
      'regexp/no-unused-capturing-group': 'off',
      'regexp/no-empty-alternative': 'off',
      'regexp/no-dupe-disjunctions': 'off',
      'no-prototype-builtins': 'off',
      'no-use-before-define': 'off',
      'e18e/prefer-object-has-own': 'off',
    },
  },
  {
    files: ['tests/**/*.test.js'],
    languageOptions: {
      globals: {
        ...vitest.configs.env.languageOptions.globals,
      },
    },
  }
)
