### Unreleased

### 2.0.0

Breaking:

- Removed tslint in favor of eslint + eslint-typescript
- Updated tsconfig.json
  - noImplicitAny = true
  - noImplicitThis = true
  - preserveConstEnums = default

### 1.0.7

- Made `ts-jest` dependency more flexible as it supports 24 and 25
- Upgraded lint-stage to the v10 configuration

### 1.0.6

- Added azureAutoComplete=true to default renovate config

### 1.0.5

- Updated ts-jest integration for jest config

### 1.0.4

- Changed renovate config to extend from their group:monorepos and group:recommended configs

### 1.0.3

- Fixed lintstage config for lint-staged@9.0.0

### 1.0.2

- Renovate: Automerge all PRs once approved

### 1.0.1

- Fixed `renovate.config` inheritence

### 1.0.0

- Breaking: tsconfig
  - Enabled `strict` mode
  - Enabled `noFallthroughCasesInSwitch`
  - Enabled `preserveConstEnums` to decrease compile size
  - Added `tslib` as a dependency and set `importHelpers` to true as it should be default for all applications
- Fixed `renovate.config` to not reference self
- Updated `.npmignore` to omit all test related files so all files can be included in the build

### 0.2.2

- Added autofixing of lint errors
- Added eslint to javascript

### 0.2.1

- Fixed lint-staged not running on `*.md` files

### 0.2.0

- Updated .gitignore and .npmignore to be more generic so they can be the base standard across repositories
- Added jest config

### 0.1.4

- Integrated `exec-if-exists` to skip cli commands that aren't available (creating an opt in experience for git commit hooks)

### 0.1.3

- Migrated package from renovate-config-snowcoders to @snowcoders/renovate-config
- Added a husky config
- Added a ling-staged config
- Added a prettier config
- Added a sortier config
