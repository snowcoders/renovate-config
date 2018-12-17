# Renovate configs (and more)

This repository hosts several sharable configs that can be consumed and customized by Snowcoders packages.

Currently it hosts the following configs

- Husky
- Lint staged
- Nyc
- Prettier
- Renovate
- Sortier

We're open to hosting more, as long as they are a part of the Snowcoders ecosystem.

Other things that are useful from this repository

- .gitignore - We wil notify about updates via our changelog
- .npmignore - We wil notify about updates via our changelog

# Usage

A great example of how to use these configs is this repository itself! Though for you instead of referencing the `dist` folder directly you would reference `@snowcoders/renovate-config`

## Husky config

No customization should be needed. Recommended filename `.huskyrc.js`.

## Jest config

No customization should be needed. Recommended filename `jest.config.js`.

## Lint staged config

No customization should be needed. Recommended filename `.lintstagedrc.js`.

## Prettier config

No customization should be needed. Recommended filename `.prettierrc.js`.

## Sortier config

No customization should be needed. Recommended filename `.sortierrc.js`.

## Typescript config

You are able to use this package as a [base for your tsconfig file](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#tsconfigjson-inheritance-via-nodejs-packages).

Our config focuses more on the actual build outputs so your config can focus more on the `strict*` and `no*` options. An example of a subconfig would look like:

```
{
  "compilerOptions": {
    "noImplicitAny": false,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "outDir": "./dist/",
    "strictBindCallApply": true
  },
  "extends": "@snowcoders/renovate-config",
  "include": ["./src/**/*.ts"]
}
```

# Missing configs

## Nyc

Nyc only supports `.nycrc` files. Instead they use an `extends` system which we have not set up.
