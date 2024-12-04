import globals from "globals";

import js from "@eslint/js";

import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ extends: ["plugin:react/recommended", "airbnb", "prettier"] },
	{ files: ["**/*.{js,mjs,cjs,jsx}"] },
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.jest },
			sourceType: "module",
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	{
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
			"import/no-unresolved": ["error", { commonjs: true, amd: true }],
			"import/named": "error",
			"import/namespace": "error",
			"import/default": "error",
			"import/export": "error",
		},
	},
	js.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginJest.configs.recommended,
	pluginImport.configs.recommended,
];
