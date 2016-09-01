'use strict';
const ejs = require('ejs');
const ext = require('object-assign');
const fs = require('fs');
const path = require('path');
const fontColorContrast = require('font-color-contrast');

const fontContrast = function(color) {
  //HACK: check if shorthand (#fff)
  if (color.length === 4) {
    color = `${color}${color[3]}${color[3]}${color[3]}`
  }
  return fontColorContrast(color);
}

module.exports = function (themeopts) {
  // set theme options object
  themeopts = Object(themeopts);

  // set theme logo
  themeopts.logo = themeopts.logo || 'mdcss-logo.png';

  // set theme title
  themeopts.title = themeopts.title || 'Style Guide';

  // set theme css
  themeopts.css = themeopts.css || ['primer.css', 'style.css'];

  // set theme css
  themeopts.js = themeopts.js || [];

  // set theme masthead color
  themeopts.color = themeopts.color || ['#4078c0'];

  // set navigation links
  themeopts.nav = themeopts.nav || [];

  // set example conf
  themeopts.examples = ext({
    base:    '',
    target:  '_self',
    css:     ['style.css'],
    js:      [],
    bodyjs:  [],
    htmlcss: 'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:0;position:static;width:auto',
    bodycss: 'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:16px;position:static;width:auto'
  }, themeopts.examples);

  // return theme
  return function (docs) {
    // set assets directory and template
    docs.assets   = path.join(__dirname, 'assets');
    docs.template = path.join(__dirname, 'template.ejs');

    // set theme options
    docs.themeopts = themeopts;
    const sortColors = (unsortedColors) => {
      return Object.keys(unsortedColors).sort((colorA, colorB) => {
        const aV = unsortedColors[colorA];
        const bV = unsortedColors[colorB];
        if (aV > bV) {
          return 1;
        }
        if (bV > aV) {
          return -1;
        }
        return 0;
      });
    }
    if (themeopts.colors || themeopts.variables) {
      const styleguide = {
        title: 'Styleguide',
        name: 'styleguide',
        children: []
      }
      if (themeopts.colors) {
        styleguide.children.push({
          section: 'Styleguide',
          title: 'Colors',
          name: 'colors',
          content: sortColors(themeopts.colors).map((color) => (
            `<div class="color-swatch" style="background-color: ${themeopts.colors[color]}; color: ${fontContrast(themeopts.colors[color])}; display: inline-block; height: 75px; width: 150px;"><div class="color-value">${themeopts.colors[color]}</div><div class="color-name">${color}</div></div>`
          )).join('')
        });
      }
      if (themeopts.variables) {
        styleguide.children.push({
          section: 'Styleguide',
          title: 'Variables',
          name: 'variables',
          content: `<pre class="highlight"><code>${Object.keys(themeopts.variables).map((key) => (
            `${key}: ${themeopts.variables[key]}`
          )).join('\n')}</code></pre>`
        });
      }
      docs.list.unshift(styleguide);
    }

    // return promise
    return new Promise(function (resolve, reject) {
      // read template
      fs.readFile(docs.template, 'utf8', function (error, contents) {
        // throw if template could not be read
        if (error) reject(error);
        else {
          // set examples options
          docs.opts = ext({}, docs.opts, docs.themeopts);

          // set compiled template
          docs.template = ejs.compile(contents)(docs);

          // resolve docs
          resolve(docs);
        }
      });
    });
  };
};

module.exports.type = 'mdcss-theme';
