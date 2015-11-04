this.examples = this.examples || {};

examples.color = (function () {
	return function (text, node) {
		var fragment = document.createElement('div');
		var lines = text.trim().split(/\n+/);

		fragment.className = 'colors';

		lines.map(parseLine).map(parseColor).forEach(fragment.appendChild, fragment);

		node.parentNode.parentNode.replaceChild(fragment, node.parentNode);
	};

	function parseLine(line) {
		line = line.trim();

		var color = {};
		var match = /@([^:]+):\s*(.+?)(?=\s+@|$)/g;
		var prop;

		while (prop = match.exec(line)) color[prop[1]] = prop[2];

		return color;
	}

	function parseColor(color) {
		var colorNode = document.createElement('div');

		colorNode.className = 'color';

		var swatchNode = colorNode.appendChild(document.createElement('div'));

		swatchNode.className = 'color-swatch';

		swatchNode.style.backgroundColor = color.color;

		var contrastColor = contrast(color.color);

		swatchNode.style.color = contrastColor;

		swatchNode.style.textShadow = '0 0 1px ' + (contrastColor === '#ffffff' ? '#000000' : '#ffffff');

		swatchNode.appendChild(document.createTextNode(color.color));

		Object.keys(color).filter(function (key) { return key !== 'color' }).forEach(function (key) {
			var propertyNode = colorNode.appendChild(document.createElement('div'));

			propertyNode.className = 'color-property';

			propertyNode.setAttribute('data-name', key);

			propertyNode.appendChild(document.createTextNode(color[key]));
		});

		return colorNode;
	}

	function hex2rgb(hex) {
		var bigint = parseInt(hex.slice(1), 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;

		return [r, g, b];
	}

	function getRGB(color) {
		return /^#/.test(color) ? hex2rgb(color) : color.replace(/[^\d,]+/g, '').split(/,/).map(function (part) { return part * 1; });
	}

	function contrast(color) {
		var rgb = getRGB(color);
		var o   = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);

		return o <= 180 ? '#ffffff' : '#000000';
	}
})();
