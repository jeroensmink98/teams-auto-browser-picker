chrome.webNavigation.onCompleted.addListener(async (details) => {
    if (details.url.includes("teams.microsoft.com")) {
        console.log("Injecting content script...");
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["contentScript.js"]
        });
    }
}, { url: [{ hostContains: "teams.microsoft.com" }] });
