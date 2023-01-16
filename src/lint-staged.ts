function getRunIfExists(command: string) {
  return "exec-if-exists " + command;
}

/**
 * Optional tooling
 *  - eslint@>=8.0.0
 *  - prettier@>=2.1.0
 *  - sortier@>=2.0.0
 */
export const lintStaged = {
  // Generated files or files handled further down in this file
  "**/!(package-lock.json|*.@(?([cm])[jt]s)?(x))": [
    getRunIfExists("prettier --write --ignore-unknown"),
    getRunIfExists("sortier --ignore-unknown"),
  ],

  // Javascript based source code files
  "**/*.@(?([cm])[jt]s)?(x)": [
    getRunIfExists("eslint --fix"),
    getRunIfExists("prettier --write --ignore-unknown"),
    getRunIfExists("sortier --ignore-unknown"),
  ],
};
