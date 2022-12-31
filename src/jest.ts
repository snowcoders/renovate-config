import { JestConfigWithTsJest } from "ts-jest";

/**
 * Requires `ts-jest` to be installed as well
 */
export const jest: JestConfigWithTsJest = {
  collectCoverage: true,
  testEnvironmentOptions: {
    url: "http://localhost/",
  },

  // Copied from https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
  preset: "ts-jest/presets/default-esm",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.m?[t]sx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};
