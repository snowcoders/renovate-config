/**
 * Config is built to run via ci or local
 *  - CI: `npx --no release-it -- --ci`
 *  - Local testing: npx --no release-it -- --ci --no-git.requireCleanWorkingDir --dry-run`
 *
 * Requires changelog to be at `CHANGELOG.md`
 */
export const releaseIt = {
  git: {
    changelog: false,
    commit: false,
  },
  github: {
    release: true,
  },
  increment: false,
  plugins: {
    "@release-it/keep-a-changelog": {
      filename: "CHANGELOG.md",
    },
  },
};
