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

# Usage

A great example of how to use these configs is this repository itself! Though for you instead of referencing the `dist` folder directly you would reference `@snowcoders/renovate-config`

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

## Husky config

No customization should be needed

## Lint staged config

No customization should be needed

## Prettier config

No customization should be needed

## Sortier config

No customization should be needed
