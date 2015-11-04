this.examples = this.examples || {};

this.examples.html = function (input, node) {
	var example = document.createElement('div');

	example.className = 'example';

	example.innerHTML = input;

	node.parentNode.parentNode.insertBefore(example, node.parentNode);
};
