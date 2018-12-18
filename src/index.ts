export const husky = {
  hooks: {
    "pre-commit": "lint-staged"
  }
};

function getRunIfExists(command: string) {
  return `exec-if-exists ${command}`;
}
export const lintStaged = {
  ignore: ["**/package-lock.json"],
  linters: {
    "**/*.{css,md}": [
      getRunIfExists("prettier --write"),
      getRunIfExists("sortier"),
      "git add"
    ],
    "**/*.{html,js,jsx,json}": [
      getRunIfExists("prettier --write"),
      getRunIfExists("sortier"),
      "git add"
    ],
    "**/*.{ts,tsx}": [
      getRunIfExists("tslint -c tslint.json"),
      getRunIfExists("prettier --write"),
      getRunIfExists("sortier"),
      "git add"
    ]
  }
};

export const jest = {
  collectCoverage: true,
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001]
      },
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["<rootDir>/src/**/*.test.+(ts|tsx|js|jsx)"],
  testURL: "http://localhost/",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};

export const prettier = {};

export const sortier = {};
