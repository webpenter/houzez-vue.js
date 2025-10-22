import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'
import babelParser from '@babel/eslint-parser'

export default [
  {
    ignores: ['dist', 'node_modules', '**/*.min.js', '**/*.min-min.js', 'src/assets/js/**'],
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
        ...globals.node,
        $: 'readonly',
        jQuery: 'readonly',
        google: 'readonly',
        Chart: 'readonly',
        define: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        imagesLoaded: 'readonly',
        marker: 'writable',
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
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/prop-name-casing': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/no-v-html': 'warn',
      'vue/no-deprecated-filter': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/require-v-for-key': 'warn',
      'vue/valid-v-for': 'warn',
      'vue/no-use-v-if-with-v-for': 'warn',
      'vue/no-side-effects-in-computed-properties': 'warn',
      'vue/no-required-prop-with-default': 'warn',
      'no-console': 'off',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'no-case-declarations': 'warn',
    },
  },
  eslintConfigPrettier,
]
