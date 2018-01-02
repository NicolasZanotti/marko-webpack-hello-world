var button = require('src/components/basic-button');

button.render({
	label: 'Hello World!'
}).then(function(result) {
	result.appendTo(document.body);
});
