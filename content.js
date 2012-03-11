var link = document.querySelector('link[type="application/rss+xml"]');

if (link)
	chrome.extension.sendRequest({key: 'feedURL', value: link.href});