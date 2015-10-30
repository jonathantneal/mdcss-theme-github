var ejs  = require('ejs');
var fs   = require('fs-wishlist').mixin(require('fs-promise'));
var path = require('path');

module.exports = function (opts) {
	opts = opts || {};

	opts.template  = opts.template || 'main';
	opts.index     = opts.index    || 'index.html';

	return {
		process: function (documentation, destination) {
			var index    = path.join(destination, opts.index);
			var assets   = path.join(__dirname, 'assets');
			var template = path.join(__dirname, opts.template + '.ejs');

			return Promise.all([
				fs.copy(assets, destination),
				fs.readFile(template, 'utf8').then(function (contents) {
					var compiled = ejs.compile(contents)(documentation);

					return fs.writeFile(index, compiled);
				})
			]);
		}
	};
};
