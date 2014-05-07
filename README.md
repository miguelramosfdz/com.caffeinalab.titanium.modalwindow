com.caffeinalab.titanium.modalwindow
====================================

ModalWindow in a simple way, for Alloy

## Usage

```javascript

var $modal = Alloy.createWidget("com.caffeinalab.titanium.modalwindow", {
	title: "TEST"
});

$modal.add(Ti.UI.createWebView({
	url: url
}));

$modal.open();

```