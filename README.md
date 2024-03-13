# The Floor is Lava

A BabylonJS game.

- [The Floor is Lava](#the-floor-is-lava)
  - [Prerequisites](#prerequisites)
  - [Create the Project](#create-the-project)
    - [Project Configuration](#project-configuration)
    - [Development Packages](#development-packages)
      - [Installing BabylonJS](#installing-babylonjs)
      - [Installing TypeScript](#installing-typescript)
      - [Installing Webpack](#installing-webpack)
      - [Install testing framework](#install-testing-framework)
    - [Project cleaning script](#project-cleaning-script)
    - [Configure TypeScript](#configure-typescript)
  - [Source directories](#source-directories)
  - [Index.html](#indexhtml)
  - [Build](#build)
    - [Project building scripts](#project-building-scripts)
  - [Tests](#tests)
    - [Testing script](#testing-script)
  - [API Documentation](#api-documentation)
    - [Install typedoc](#install-typedoc)

## Prerequisites

- npm v.10

## Create the Project

### Project Configuration

```shell
npm init -y
```

### Development Packages

Install the different packages we'll need for this project.

#### Installing BabylonJS

```shell
npm install --save-dev @babylonjs/core
npm install --save-dev @babylonjs/inspector
```

- @babylonjs/core - The core modules for BabylonJS
- @babylonjs/inspector - The debugging inspector we'll be using during development.

#### Installing TypeScript

```shell
npm install --save-dev typescript
```

- typescript - the typescript language compiler

#### Installing Webpack

```shell
npm install --save-dev webpack webpack-cli webpack-dev-server copy-webpack-plugin html-webpack-plugin ts-loader
```

- webpack
- webpack-cli
- wepback-dev-server
- copy-webpack-plugin
- html-webpack-plugin
- ts-loader

#### Install testing framework

```shell
npm install --save-dev jest ts-jest @types/jest
```

Add this `jest.config.js` file to the root of the project. [https://github.com/RaananW/babylonjs-webpack-es6/blob/master/jest.config.js](https://github.com/RaananW/babylonjs-webpack-es6/blob/master/jest.config.js)

### Project cleaning script

Edit `package.json` and changes the `scripts` section to the following:

```json
  "scripts": {
    "clean": "rm -rf dist node_modules"
  },
  ```

  The commands `npm run clean` and `npm install` should work now.  You can also use `npm upgrade` to update to the latest versions.

### Configure TypeScript

```shell
node_modules/typescript/bin/tsc --init
```

This creates a `tsconfig.json` file.  If you look at this file, there are a lot of options in it, and comments for what each means.  Ultimately, this is what we want in our file:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "ESNext",
    "moduleResolution": "node",
    "noResolve": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "preserveConstEnums":true,
    "lib": [
        "dom",
        "es6"
    ],
    "rootDir": "src",
  },
  "exclude": [
    "./tests/",
    "./node_modules/",
    "./dist/"
  ],
}
```

## Source directories

We need to create the following directories:

- src
- src/public
- tests

```shell
mkdir -p src/public tests
```

## Index.html

In the `src` directory, create a new file called `index.html` with the following:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>base</title>
    </head>
    <body>
    </body>
    <style>
        html, body {
            background-color: #f0f0f0;
            width: 100%;
            height: 100%;
            border: 0;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    </style>
</html>
```

## Build

### Project building scripts

  Edit `package.json` and add the `build` and `serve` lines below to the `scripts` section:

```json
  "scripts": {
    "build": "npm test && webpack",
    "serve": "npm test && webpack serve --config webpack.config.dev.js",
    "clean": "rm -rf dist node_modules"
  },
  ```

You can now build the project with `npm run build`.  You can run the project locally with `npm run serve`.

## Tests

### Testing script

  Edit `package.json` and add the `test` line below to the `scripts` section:

```json
  "scripts": {
    "test": "jest",
    "build": "npm test && webpack",
    "serve": "npm test && webpack serve --config webpack.config.dev.js",
    "clean": "rm -rf dist node_modules"
  },
  ```

You can now run the tests with `npm run test`.

## API Documentation

### Install typedoc

```shell
npm install --save-dev typedoc
```

Add the `doc` command to `package.json` scripts.  Update `clean` to remove the `docs` directory.

```json
  "scripts": {
    "test": "jest",
    "build": "npm test && webpack",
    "serve": "npm test && webpack serve --config webpack.config.dev.js",
    "doc": "typedoc src/**/*.ts",
    "clean": "rm -rf docs dist node_modules"
  },
  ```

Update `tsconfig.json` to exclude `docs`.

```json
  "exclude": [
    "./tests/",
    "./node_modules/",
    "./dist/",
    "./docs/"
  ],
```
