# GitHub

<img align="right" width="96" height="96" src="https://i.imgur.com/3rqeZXi.png" title="logo of mdcss">

[![NPM Version][npm-img]][npm]

[GitHub] is a Github-flavored theme for [mdcss].

## Usage

Add [mdcss] and [mdcss-theme-github] to your build tool:

```bash
npm install mdcss --save-dev
npm install mdcss-theme-github --save-dev
```

#### Node

```js
require('mdcss')({
	theme: require('mdcss-theme-github')({ /* options */ })
}).process(YOUR_CSS);
```

## Options

#### `template`

Type: `String`  
Default: `'main'`

The template within the mdcss theme you would like to use.

#### `index`

Type: `String`  
Default: `'index.html'`

The filename of the main file you would like generated inside the style guide directory.

[npm]:     https://www.npmjs.com/package/mdcss-theme-github
[npm-img]: https://img.shields.io/npm/v/mdcss-theme-github.svg
[mdcss]:   https://github.com/jonathantneal/mdcss

[GitHub]: https://github.com/jonathantneal/mdcss-theme-github
