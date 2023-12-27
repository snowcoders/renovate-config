# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- tsconfigs
  - Fixed tsconfig.website.browser.json missing from npm package

## [3.0.0-beta.16] - 2023-12-27

- tsconfigs
  - Fixed bug where moduleResolution needs to be defined with module

## [3.0.0-beta.15] - 2023-12-27

- tsconfigs
  - Support typescript >=5.2.0
  - Dropping support for anything before node16 (es2022)
  - Changed what you should use ase your base configs. This may or maynot be breaking so be aware

## [3.0.0-beta.14] - 2023-08-03

- Updated tsconfig moduleResolution to 16

## [3.0.0-beta.13] - 2023-02-03

- Added major version checks for eslint, prettier, and sortier during config load

## [3.0.0-beta.12] - 2023-01-22

- Updated exec-if-exists@beta

## [3.0.0-beta.11] - 2023-01-16

- Removed optional dependencies as they seem to be getting installed downstream

## [3.0.0-beta.10] - 2023-01-16

- Improved and cleaned up lint-staged config
  - Requires sortier 2.0.0-beta.0 or higher
  - Requires prettier@2.1.0 or higher

## [3.0.0-beta.9] - 2022-12-31

- Fixed jest config to apply to tsx files

## [3.0.0-beta.8] - 2022-12-30

- Fixed release-it jsdoc comments
- Dropped node 12 and 14 support

## [3.0.0-beta.7] - 2022-12-26

- Fixed `tsconfig.website.browser.[dev|prod].json` having a broken base config reference

## [3.0.0-beta.6] - 2022-12-25

- Removed include, exclude, rootdir, declarationdir, and outdir from tsconfig files

## [3.0.0-beta.5] - 2022-12-01

- Tsconfig
  - Moved tsconfig.json to tsconfig.base.json though you should probably not use this directly anymore... See documentation on [the README about typescript configs](./README.md#typescript-config)

## [3.0.0-beta.4] - 2022-11-18

- Tsconfig - Fixed missing tsconfig file

## [3.0.0-beta.3] - 2022-11-16

- Husky - BREAKING
  - Removed husky config as [it's an anti-pattern](https://github.com/typicode/husky/issues/1047). To see how to migrate away from this config, see the PR that added this entry. You can also try the following script, just verify the `prepare` script looks correct after running:
    ```
    npm ci
    npm set-script prepare "npx --no husky install"
    npm set-script husky:commit-msg "npx --no commitlint -- --edit"
    npm set-script husky:pre-commit "npx --no lint-staged"
    npm set-script husky:pre-push "npm test"
    npm install -D -E husky@latest
    npm run prepare
    npx husky set .husky/commit-msg "npm run husky:commit-msg"
    npx husky set .husky/pre-commit "npm run husky:pre-commit"
    npx husky set .husky/pre-push "npm run husky:pre-push"
    rm .huskyrc.cjs
    rm .huskyrc.js
    rm .huskyrc.mjs
    rm .huskyrc.ts
    npm i
    ```
- Tsconfig - BREAKING
  - `module` now inherits it's value from Typescript (should resolve to ES2015)
  - `target` updated to ES2020
- eslint - BREAKING
  - Moved to a builder function `buildEslintConfig` that takes in a options object
- Release-it
  - Added brand new config

## 2.0.3

- Updated renovate config
  - Limited version of husky to 4.x.x

## 2.0.2

- Updated tsconfig.json
  - noFallthroughCasesInSwitch = false (tracked via eslint)

## 2.0.1

- Fixed typescript config to allow for unused parameters

## 2.0.0

Breaking:

- Removed tslint in favor of eslint + eslint-typescript
- Updated tsconfig.json
  - noImplicitAny = true
  - noImplicitThis = true
  - preserveConstEnums = default

## 1.0.7

- Made `ts-jest` dependency more flexible as it supports 24 and 25
- Upgraded lint-stage to the v10 configuration

## 1.0.6

- Added azureAutoComplete=true to default renovate config

## 1.0.5

- Updated ts-jest integration for jest config

## 1.0.4

- Changed renovate config to extend from their group:monorepos and group:recommended configs

## 1.0.3

- Fixed lintstage config for lint-staged@9.0.0

## 1.0.2

- Renovate: Automerge all PRs once approved

## 1.0.1

- Fixed `renovate.config` inheritence

## 1.0.0

- Breaking: tsconfig
  - Enabled `strict` mode
  - Enabled `noFallthroughCasesInSwitch`
  - Enabled `preserveConstEnums` to decrease compile size
  - Added `tslib` as a dependency and set `importHelpers` to true as it should be default for all applications
- Fixed `renovate.config` to not reference self
- Updated `.npmignore` to omit all test related files so all files can be included in the build

## 0.2.2

- Added autofixing of lint errors
- Added eslint to javascript

## 0.2.1

- Fixed lint-staged not running on `*.md` files

## 0.2.0

- Updated .gitignore and .npmignore to be more generic so they can be the base standard across repositories
- Added jest config

## 0.1.4

- Integrated `exec-if-exists` to skip cli commands that aren't available (creating an opt in experience for git commit hooks)

## 0.1.3

- Migrated package from renovate-config-snowcoders to @snowcoders/renovate-config
- Added a husky config
- Added a ling-staged config
- Added a prettier config
- Added a sortier config
