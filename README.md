# mdcss GitHub

<img align="right" width="96" height="96" src="https://i.imgur.com/3rqeZXi.png" title="logo of mdcss">

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[mdcss GitHub] is a theme for [mdcss] based on the documentation styles seen across GitHub.

## Usage

Add [mdcss] and [mdcss GitHub] to your build tool:

```bash
npm install mdcss --save-dev
npm install mdcss-theme-github --save-dev
```

Whenever [mdcss] is used, reference this theme.

```js
require('mdcss')({
	theme: require('mdcss-theme-github')({ /* options */ })
})
```

## Options

#### `title`

Type: `String`  
Default: `'Style Guide'`

The page title to be used by the style guide.

#### `logo`

Type: `String`  
Default: `'https://i.imgur.com/3rqeZXi.png'`

<img src="https://i.imgur.com/3rqeZXi.png" width="96" height="96">

The page logo to be used by the style guide.

#### `exampleCSS`

Type: `String`  
Default: `'style.css'`

The stylesheet to be used by HTML examples.

[ci]:      https://travis-ci.org/jonathantneal/mdcss-theme-github
[ci-img]:  https://img.shields.io/travis/jonathantneal/mdcss-theme-github.svg
[npm]:     https://www.npmjs.com/package/mdcss-theme-github
[npm-img]: https://img.shields.io/npm/v/mdcss-theme-github.svg
[mdcss]:   https://github.com/jonathantneal/mdcss

[mdcss GitHub]: https://github.com/jonathantneal/mdcss-theme-github
