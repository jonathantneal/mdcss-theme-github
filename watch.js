var exec  = require('child_process').exec;
var chokidar = require('chokidar');

var watch = require('./package').watch;

if (watch) Object.keys(watch).forEach(function (script) {
	var tree = watch[script];

	chokidar.watch(tree, { ignoreInitial: true }).on('all', function (event) {
		exec('npm run ' + script, function (err, stdout) {
			if (!err) console.log(stdout);
		});
	});
});

