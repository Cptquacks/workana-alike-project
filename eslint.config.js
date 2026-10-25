import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default [
	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/.nuxt/**', '**/vendor/**'],
	},
	{
		files: ['resources/js/**/*.{ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				parser: typescriptEslint.parser,
			},
		},
	},
	eslint.configs.recommended,
	...typescriptEslint.configs.recommended,
	...eslintPluginVue.configs['flat/recommended'],
	eslintConfigPrettier,
	{
		files: ['**/*.vue'],
		rules: {
			'vue/first-attribute-linebreak': 'off',
		},
	},
];
