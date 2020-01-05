export const husky = {
  hooks: {
    "pre-commit": "lint-staged"
  }
};

function getRunIfExists(command: string) {
  return `exec-if-exists ${command}`;
}
export const lintStaged = {
  "**/!(package-lock).{json}": [
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
    "git add"
  ],
  "**/*.{css,html,md}": [
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
    "git add"
  ],
  "**/*.{js,jsx}": [
    getRunIfExists("eslint --fix"),
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
    "git add"
  ],
  "**/*.{ts,tsx}": [
    getRunIfExists("tslint -c tslint.json --fix"),
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
    "git add"
  ]
};

export const jest = {
  collectCoverage: true,
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  testURL: "http://localhost/"
};

export const prettier = {};

export const sortier = {};
