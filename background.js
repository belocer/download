function onExtensionClick (tab) {
  if(tab.url.indexOf("youtube.com") != -1) {
    chrome.tabs.create( {url: tab.urlreplace("youtube.com", "ssyoutube.com")})
  }
}

chrome.browserAction.onClicked.addListener(onExtensionClick)