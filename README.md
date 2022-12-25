# Renovate configs (and more)

This repository hosts several sharable configs that can be consumed and customized by Snowcoders packages.

We're open to hosting more, as long as they are a part of the Snowcoders ecosystem.

Other things that are useful from this repository

- .gitignore - We wil notify about updates via our changelog
- .npmignore - We wil notify about updates via our changelog

# Usage

A great example of how to use these configs is this repository itself! Though for you instead of referencing the `dist` folder directly you would reference `@snowcoders/renovate-config`

## Eslint config

1. Install dependencies

   ```bash
   npm i --save-dev --exact eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier
   ```

1. Create file`.eslintrc.js`.
1. Add the following contents

   ```js
   /* eslint-disable */
   const configs = require("@snowcoders/renovate-config");

   module.exports = configs.eslint;
   ```

## Husky config

1. Install dependencies

   ```bash
   npm i --save-dev --exact husky lint-staged
   ```

1. Create file`.huskyrc.js`.
1. Add the following contents

   ```js
   /* eslint-disable */
   const configs = require("@snowcoders/renovate-config");

   module.exports = configs.husky;
   ```

## Jest config

1. Install dependencies

   ```bash
   npm i --save-dev --exact jest ts-jest
   ```

1. Create file `jest.config.js`.
1. Add the following contents

   ```js
   /* eslint-disable */
   const configs = require("@snowcoders/renovate-config");

   module.exports = configs.jest;
   ```

## Lint staged config

1. Install dependencies

   ```bash
   npm i --save-dev --exact husky lint-staged
   ```

1. Create file`.lintstagedrc.js`.
1. Add the following contents

   ```js
   /* eslint-disable */
   const configs = require("@snowcoders/renovate-config");

   module.exports = configs.lintStaged;
   ```

## Prettier config

1. Install dependencies

   ```bash
   npm i --save-dev --exact prettier
   ```

1. Create file`.prettierrc.js`.
1. Add the following contents

   ```js
   /* eslint-disable */
   const configs = require("@snowcoders/renovate-config");

   module.exports = configs.prettier;
   ```

## Sortier config

1. Install dependencies

   ```bash
   npm i --save-dev --exact sortier
   ```

1. Create file`.sortierrc.js`.
1. Add the following contents

   ```js
   /* eslint-disable */
   const configs = require("@snowcoders/renovate-config");

   module.exports = configs.sortier;
   ```

## Typescript config

1. Install dependencies

   ```bash
   npm i -D -E typescript
   ```

For all configs, you'll need to specify:

- compilerOptions.rootdir
- compilerOptions.outdir
- include
- exclude

### For libraries

Our project has three tsconfigs for libraries

- tsconfig.library.cjs.json - config to be used for cjs projects
- tsconfig.library.esm.json - config to be used for esm projects

For libraries which support both ESM and CJS, the current recommendation is to have your `tsconfig.json` extend `tsconfig.library.esm.json` and then have a separate tsconfig.cjs.json for the CJS build. This will mean that VSCode will load intellisense for ESM but overall it shouldn't impact your development day to day.

### For websites

Our project has three tsconfigs for libraries

- tsconfig.website.json - config that tsconfig.json extends for vscode intellisense
- tsconfig.website.browser.dev.json - config for webpack to use for development browser asset builds
- tsconfig.website.browser.prod.json - config for webpack to use for production browser asset builds
- tsconfig.website.server.json - config to build the node server assets

For libraries which support both ESM and CJS, the current recommendation is to have your `tsconfig.json` extend `tsconfig.library.esm.json` and then have a separate tsconfig.cjs.json for the CJS build. This will mean that VSCode will load intellisense for ESM but overall it shouldn't impact your development day to day.
