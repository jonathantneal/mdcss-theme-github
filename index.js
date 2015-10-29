var ejs  = require('ejs');
var fs   = require('fs-wishlist').mixin(require('fs-promise'));
var path = require('path');

module.exports = function (section, opts) {
	var directory = path.join(process.cwd(), opts.directory);
	var index     = path.join(directory, opts.index);

	var assets   = path.join(__dirname, 'assets');
	var template = path.join(__dirname, opts.template);

	return Promise.all([
		fs.copy(assets, directory),
		fs.readFile(template, 'utf8').then(function (contents) {
			var compiled = ejs.compile(contents)(section);

			return fs.writeFile(index, compiled);
		})
	]);
};
