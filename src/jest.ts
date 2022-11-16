import { JestConfigWithTsJest } from "ts-jest";

/**
 * Requires `ts-jest` to be installed as well
 */
export const jest: JestConfigWithTsJest = {
  collectCoverage: true,
  extensionsToTreatAsEsm: [".ts"],
  // Jest doesn't resolve import/export statements ending with a .js into .jsx, .ts, or .tsx
  // and leaves them as is resulting in a "Cannot find module" error. By stripping the .js
  // off the end, it becomes a "best match" and we just get lucky.
  // https://github.com/facebook/jest/issues/9430#issuecomment-836760438
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  preset: "ts-jest/presets/default-esm",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
};
