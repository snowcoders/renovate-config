import { Linter } from "eslint";

export const buildEslintConfig = (options: {
  /**
   * Requires:
   *   - eslint-plugin-import
   */
  esm?: boolean;
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
}): Linter.Config => {
  const { esm, prettier, react, typescript } = options;

  let result: Pick<
    Required<Linter.Config>,
    "extends" | "ignorePatterns" | "parserOptions" | "plugins" | "root" | "rules" | "settings"
  > &
    Pick<Linter.Config, "parser"> = {
    extends: ["eslint:recommended"],
    ignorePatterns: ["*rc.*js", "*.config.*js"],
    parserOptions: {
      ecmaFeatures: {},
    },
    plugins: [],
    root: true,
    rules: {},
    settings: {},
  };

  if (typescript) {
    result = {
      ...result,
      extends: [...result.extends, "plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      plugins: [...result.plugins, "@typescript-eslint"],
    };
  }

  if (esm) {
    result = {
      ...result,
      parserOptions: {
        ...result.parserOptions,
        sourceType: "module",
      },
      plugins: [...result.plugins, "import"],
      rules: {
        ...result.rules,
        // Requires the `.js` extension for internal paths
        "import/extensions": [2, "ignorePackages"],
      },
    };
  }

  if (react) {
    result = {
      ...result,
      extends: [...result.extends, "plugin:react/recommended"],
      parserOptions: {
        ...result.parserOptions,
        ecmaFeatures: {
          ...result.parserOptions.ecmaFeatures,
          jsx: true,
        },
      },
      plugins: [...result.plugins, "react"],
      settings: {
        ...result.settings,
        react: {
          ...result.settings.react,
          version: "detect",
        },
      },
    };
  }

  if (prettier) {
    result = {
      ...result,
      extends: [...result.extends, "plugin:prettier/recommended"],
      plugins: [...result.plugins, "prettier"],
    };
  }

  return result;
};
