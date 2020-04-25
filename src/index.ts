export const husky = {
  hooks: {
    "pre-commit": "lint-staged",
  },
};

function getRunIfExists(command: string) {
  return "exec-if-exists " + command;
}
export const lintStaged = {
  "**/!(package-lock).{json}": [
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
  "**/*.{css,html,md}": [
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
  "**/*.{js,jsx}": [
    getRunIfExists("eslint --fix"),
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
  "**/*.{ts,tsx}": [
    getRunIfExists("tslint -c tslint.json --fix"),
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
};

export const jest = {
  collectCoverage: true,
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  testURL: "http://localhost/",
};

export const prettier = {};

export const sortier = {};
