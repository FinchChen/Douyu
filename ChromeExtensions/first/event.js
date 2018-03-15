chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript(null, {file: "inject_code.js"});
    chrome.tabs.executeScript(null, {file: "outsidejs/1.js"});
    chrome.tabs.executeScript(null, {file: "outsidejs/2.js"});
    chrome.tabs.executeScript(null, {file: "outsidejs/3.js"});
    //chrome.tabs.executeScript(null, {file: "outsidejs/update_plot.js"});
    chrome.tabs.insertCSS(null, {code: "#guess-main-panel {position:relative;}"});
    chrome.tabs.insertCSS(null, {code: ".guess-game-box-body {padding-bottom: 2px;}"});

});


