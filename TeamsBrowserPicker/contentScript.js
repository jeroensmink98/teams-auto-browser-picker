window.addEventListener("load", () => {
    console.log("Content script loaded");
    const observer = new MutationObserver((mutations, observer) => {
        const button = document.querySelector('[aria-label="Join meeting from this browser"]');
        if (button) {
            console.log("Button found, clicking...");
            button.click();
            observer.disconnect();
        } else {
            console.log("Button not found");
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
