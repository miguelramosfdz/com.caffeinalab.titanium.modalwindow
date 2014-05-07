var args = arguments[0] || {};
if (args.title) $.win.title = args.title;

/*
Methods
*/

function open() {
	$.nav.open({
		modal: true
	});
}

function close() {
	$.nav.close();
}

function add($ui) {
	$.win.add($ui);
}

/*
Listeners
*/

$.closeButton.addEventListener('click', close);

/*
Interface
*/

exports.open = open;
exports.close = close;
exports.add = add;