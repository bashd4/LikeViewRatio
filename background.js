
chrome.webNavigation.onCompleted.addListener(callback)
chrome.webNavigation.onHistoryStateUpdated.addListener(callback)


function callback(details) {
    if (details.url.includes("youtube.com/watch?v=")) {
        const tab = details.tabId
        chrome.tabs.sendMessage(tab, message = "hello2")
    }
    chrome.scripting.executeScript({})
    console.log("HIIIIIIIIIIIIIIII " + details.url)
}