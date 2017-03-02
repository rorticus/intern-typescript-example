# intern-typescript-angular-example

This is an example of using angular and angular mock while writing unit tests using Intern.

## Installation

```bash
npm install
```

```bash
npm run compile && npm run copy
```

you're ready to run the tests!

```bash
npm test
```

## About the tests

The source and tests are all authored in TypeScript, using ESM style imports. The typings should mean that you get intellisense completion for everything including the places where `intern` plugins are used, for example `intern/chai!assert`.

## About running the tests

The example leverages new functionality in digdug to download and launch a Selenium Server automatically.

## View the example locally

```bash
npm run serve
```

then navigate to `http://localhost:8080/_build/src/resources/`

