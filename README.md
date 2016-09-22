# intern-typescript-example

This is a modern getting started example for writing functional tests using Intern.


## Installation

```bash
npm install
```

```bash
typings install
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

The functional tests demonstrate decoupling of page interactions with the test assertions, the general idea to keep the testing glue code out of the tests themselves. This encourages code re-use, as well as abstracting away common actions that are composed of multiple interactions.

An example of the above is `loginWith(username, password)`, which abstracts away multiple input entries and submitting the form.

## About running the tests

The example leverages new funtionality in digdug to download and launch a Selenium Server automatically.

## View the example locally

```bash
npm run serve
```

then navigate to `http://localhost:8080/_build/src/resources/`

successful login credentials:

```bash
user: admin
password: password
```


