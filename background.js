chrome.browserAction.onClicked.addListener(function(activeTab) {
    var URL = (activeTab.url).split("www.")[1]
    var geniusURL = 'http://genius.it/' + URL;
    chrome.tabs.create({ url: geniusURL });
});
