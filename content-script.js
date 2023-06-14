chrome.runtime.onMessage.addListener(() => {
    window.alert("HELLO FROM content")
    const info = document.getElementById("info")
    const views = info.children[0]
    console.log(views)
  });

