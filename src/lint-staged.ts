function getRunIfExists(command: string) {
  return "exec-if-exists " + command;
}

export const lintStaged = {
  // Files that only get prettier
  "**/*.{md}": [getRunIfExists("prettier --write")],

  // Files that get prettier and sortier
  "**/!(package-lock).json": [getRunIfExists("prettier --write"), getRunIfExists("sortier")],
  "**/*.{css,scss,sass,less,html}": [getRunIfExists("prettier --write"), getRunIfExists("sortier")],

  // Files that get eslint, prettier and sortier
  "**/*.{js,jsx,ts,tsx}": [
    getRunIfExists("eslint --fix"),
    getRunIfExists("prettier --write"),
    getRunIfExists("sortier"),
  ],
};
