chrome.browserAction.onClicked.addListener(function(tab) {

    chrome.tabs.executeScript(null, {file: "inject_code.js"});
    
});

document.getElementById('startbutton').onClicked(function(){

    chrome.tabs.executeScript(null, {file: "update_plot.js"});

});
