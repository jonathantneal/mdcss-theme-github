/* eslint-env browser */
/* global Prism */

document.addEventListener('DOMContentLoaded', function () {
	Array.prototype.forEach.call(document.querySelectorAll('pre code'), function (code) {
		var match = code.className.match(/(?:^|\s)lang-(\w+?)(_example|\s|$)/) || [];
		var lang  = match[1];
		var demo  = !!match[2];
		var text  = code.innerText;

		if (lang && lang in Prism.languages) {
			code.innerHTML = Prism.highlight(text, Prism.languages[lang]);
		}

		if (demo && lang in examples) {
			examples[lang](text, code);
		}
	});
});
