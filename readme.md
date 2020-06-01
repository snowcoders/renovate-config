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
   npm i --save-dev --exact typescript
   ```

1. Create file`.tsconfig.json`.
1. Add the following contents

   ```json
   {
     "compilerOptions": {
       /* Must be defined per project */
       "outDir": "./dist/",
       /* Useful for development builds */
       "sourceMap": true,
       /* Depends per project */
       "module": "CommonJS",
       /* Depends per project */
       "target": "ES5"
     },
     "extends": "@snowcoders/renovate-config",
     "include": ["./src/**/*.ts", "./src/**/*.tsx"]
   }
   ```
