import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'
import babelParser from '@babel/eslint-parser'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  eslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    rules: {
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', { singleline: 2, multiline: 1 }],
      'vue/no-unused-components': 'warn',
      'vue/no-mutating-props': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
  eslintConfigPrettier,
]
