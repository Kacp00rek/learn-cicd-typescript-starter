import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
  {
    ignores: ["dist/**"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {},
  },
);
