function getRunIfExists(command: string) {
  return "exec-if-exists " + command;
}

export const husky = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};

export const lintStaged = {
  "**/!(package-lock).{json}": [
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
  "**/*.{css,scss,sass,less,html,md}": [
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
  "**/*.{js,jsx,ts,tsx}": [
    getRunIfExists("eslint --fix"),
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
};

export const eslint = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    eqeqeq: ["error", "smart"],
  },
};

export const jest = {
  collectCoverage: true,
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  testURL: "http://localhost/",
};

export const prettier = {};

export const sortier = {};
