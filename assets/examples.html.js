this.examples = this.examples || {};

this.examples.html = (function () {
	// default block styles for iframe dom
	var iframeCSS = 'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:0;position:static;width:auto';

	// example css path
	var exampleCSS = document.getElementById('example-css').href;

	return function (input, node) {
		// get parent <pre>
		var parent = node.parentNode;

		// create <iframe>
		var iframe = parent.parentNode.insertBefore(document.createElement('iframe'), parent);

		iframe.className = 'example';

		// get iframe dom
		var iwin = iframe.contentWindow;
		var idoc = iwin.document;

		// add example HTML to iframe dom
		idoc.open();

		// conditionally append example css as stylesheet
		if (exampleCSS) idoc.write('<link href="' + exampleCSS + '" rel="stylesheet">');

		idoc.write(input);

		idoc.close();

		// add default block styles to iframe dom
		idoc.documentElement.setAttribute('style', iframeCSS);
		idoc.body.setAttribute('style', iframeCSS);

		// set iframe height based on content
		iwin.onload = function () {
			iframe.style.minHeight = 0;

			iframe.style.minHeight = idoc.documentElement.scrollHeight + (iframe.offsetHeight - iwin.innerHeight) + 'px';
		};

		iwin.onload();
	};
})();
