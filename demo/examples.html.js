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

		// conditionally append example css as stylesheet
		if (exampleCSS) {
			var icss = idoc.head.appendChild(idoc.createElement('link'));

			icss.rel  = 'stylesheet';
			icss.href = exampleCSS;
		}

		// add default block styles to iframe dom
		idoc.documentElement.setAttribute('style', iframeCSS);
		idoc.body.setAttribute('style', iframeCSS);

		// add example HTML to iframe dom
		idoc.body.innerHTML = input;

		// set iframe height based on content
		iframe.style.minHeight = idoc.documentElement.offsetHeight + (iframe.offsetHeight - iwin.innerHeight) + 'px';
	};
})();
