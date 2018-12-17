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
    "**/*.{css, md}": [
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

export const nyc = {
  all: true,
  exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
  extension: [".ts", ".tsx"],
  include: ["src/**/*.ts", "src/**/*.tsx"],
  instrument: true,
  reporter: ["text-summary", "html"],
  sourceMap: true
};

export const prettier = {};

export const sortier = {};
