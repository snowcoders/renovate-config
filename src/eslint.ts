import eslintJs from "@eslint/js";
import { ESLint, Linter } from "eslint";
// @ts-expect-error: No types defined
import eslintConfigPrettier from "eslint-config-prettier";
// @ts-expect-error: No types defined
import * as importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintReact from "eslint-plugin-react";
import eslintTs from "typescript-eslint";
import { throwIfVersionNotInRange } from "./validate-version.js";

throwIfVersionNotInRange("eslint", 9);

export const buildEslintConfig = (options: {
  /**
   * Requires:
   *   - eslint-plugin-import
   */
  esm?: boolean;
  /**
   * Default: ["coverage", "dist", "dist-cjs", "node_modules", "*.log", "*rc.*js", "*.config.*js"] +
   * whatever is in eslint's defaults https://eslint.org/docs/latest/use/configure/ignore#ignoring-files
   */
  ignores?: Linter.Config["ignores"];
  /**
   * Requires:
   *   - eslint-plugin-prettier
   *   - eslint-config-prettier
   */
  prettier?: boolean;
  /**
   * Requires:
   *   - eslint-plugin-react
   */
  react?: boolean;
  /**
   * Requires:
   *   - @typescript-eslint/eslint-plugin
   *   - @typescript-eslint/parser
   */
  typescript?: boolean;
}): ESLint.Options["baseConfig"] => {
  const { esm, ignores, prettier, react, typescript } = options;

  let result: Linter.Config[] = [
    {
      ignores: ignores ?? ["coverage", "dist", "dist-cjs", "node_modules", "*.log", "*rc.*js", "*.config.*js"],
    },
    eslintJs.configs.recommended,
  ];

  if (typescript) {
    let tsConfig = eslintTs.config({
      extends: [eslintJs.configs.recommended, eslintTs.configs.recommended],
      files: ["**/*.ts"],
      rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-imports": "error",
      },
    });
    result.push(
      // @ts-ignore
      ...tsConfig,
    );
  }

  if (esm) {
    result.push(importPlugin.flatConfigs.recommended);
    result.push({
      rules: {
        // Requires the `.js` extension for internal paths
        "import/extensions": [2, "ignorePackages"],
      },
    });
  }

  if (react) {
    result.push({
      ...eslintReact.configs.flat.recommended,
      files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    });
    result.push({
      ...eslintReact.configs.flat["jsx-runtime"],
      files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    });
  }

  if (prettier) {
    result.push(eslintPluginPrettierRecommended);
    result.push(eslintConfigPrettier);
  }

  return result;
};
