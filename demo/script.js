/* eslint-env browser */
/* global Prism */

document.addEventListener('DOMContentLoaded', function () {
	Array.prototype.forEach.call(document.querySelectorAll('pre code'), function (code) {
		var hasExample = code.className.match(/(?:^|\s)lang-(\w+)_example(?:\s|$)/) && true || false;
		var language   = (code.className.match(/(?:^|\s)lang-(\w+?)(?:_example|\s|$)/) || [])[1];

		var html = code.innerText;

		if (language && language in Prism.languages) {
			code.innerHTML = Prism.highlight(html, Prism.languages[language]);
		}

		if (hasExample) {
			var example = document.createElement('div');

			example.className = 'example';

			example.innerHTML = html;

			code.parentNode.parentNode.insertBefore(example, code.parentNode);
		}
	});
});

