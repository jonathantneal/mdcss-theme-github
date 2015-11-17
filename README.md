# mdcss GitHub

<img align="right" width="96" height="96" src="https://jonathantneal.github.io/mdcss-theme-github/demo/mdcss-logo.png" title="mdcss logo">

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

Options control the look and feel of the [mdcss GitHub] theme as well as any iframe examples that may be used.

#### `title`

Type: `String`  
Default: `'Style Guide'`

The page title to be used by the style guide.

#### `logo`

Type: `String`  
Default: `'mdcss-logo.png'`

<img src="https://jonathantneal.github.io/mdcss-theme-github/demo/mdcss-logo.png" width="96" height="96">

The page logo to be used by the style guide.

#### `examples.base`

Type:    `String`  
Default: `null`

The base URL to use for all relative URLs contained within an example,
including CSS and JavaScript references.

#### `examples.target`

Type:    `String`  
Default: `'_self'`

The frame to open example hyperlinks from within an example.

#### `examples.css`

Type:    `Array`  
Default: `['style.css']`

A list of CSS files to be used by examples.

#### `examples.js`

Type:    `Array`  
Default: `null`

A list of JavaScript files to be used by examples.

#### `examples.bodyjs`

Type:    `Array`  
Default: `null`

A list of JavaScript files to be used by examples, inserted after the example.

#### `examples.htmlcss`

Type:    `String`  
Default: `'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:0;position:static;width:auto'`

A string of styles applied to the `<html>` wrapping the example. These default styles are used to create a seamless effect with the styleguide.

#### `examples.bodycss`

Type:    `String`  
Default: `'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:16px;position:static;width:auto'`

A string of styles applied to the `<body>` wrapping the example. These default styles are used to create a seamless effect with the styleguide.

[ci]:      https://travis-ci.org/jonathantneal/mdcss-theme-github
[ci-img]:  https://img.shields.io/travis/jonathantneal/mdcss-theme-github.svg
[npm]:     https://www.npmjs.com/package/mdcss-theme-github
[npm-img]: https://img.shields.io/npm/v/mdcss-theme-github.svg
[mdcss]:   https://github.com/jonathantneal/mdcss

[mdcss GitHub]: https://github.com/jonathantneal/mdcss-theme-github
