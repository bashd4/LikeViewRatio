chrome.runtime.onMessage.addListener(callback);

function callback(message, sender, sendResponse) {
    const tab = sender.tab.id
    chrome.tabs.sendMessage(tab, message = "hello2")
}