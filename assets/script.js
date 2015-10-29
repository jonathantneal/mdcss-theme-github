/* eslint-env browser */
/* global Prism */

document.addEventListener('DOMContentLoaded', function () {
	Array.prototype.forEach.call(document.querySelectorAll('pre code'), function (code) {
		var hasExample;
		var language = 'html';

		code.className.replace(/language-(\w+)_example/g, function ($0, $1) {
			hasExample = true;
			language = $1;
		});

		var html = code.innerText;

		if (language in Prism.languages) code.innerHTML = Prism.highlight(html, Prism.languages[language]);

		if (hasExample) {
			var example = document.createElement('div');

			example.className = 'example';

			example.innerHTML = html;

			code.parentNode.parentNode.insertBefore(example, code.parentNode);
		}
	});
});

