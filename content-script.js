const info = document.getElementById("info")
const views = info.children[0]

chrome.runtime.sendMessage(message = "hello")
chrome.runtime.onMessage.addListener(() => {
    window.alert("HELLO FROM content")
  });

