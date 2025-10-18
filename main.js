VSS.init({ explicitNotifyLoaded: true });
VSS.ready(() => {
    console.log("✅ GitFlow Extension Loaded");

    const logBox = document.getElementById("result");
    let logs = [];

    function log(msg) {
        const time = new Date().toLocaleTimeString();
        const line = `[${time}] ${msg}`;
        logs.push(line);
        logBox.textContent = logs.join("\n");
        logBox.scrollTop = logBox.scrollHeight;
        console.log(line);
    }

    // Simulated API calls
    function fakeApi(action) {
        log(`Executing ${action}...`);
        setTimeout(() => log(`${action} completed successfully.`), 1000);
    }

    // Feature
    document.getElementById("btn-start-feature").addEventListener("click", () => fakeApi("Start Feature"));
    document.getElementById("btn-finish-feature").addEventListener("click", () => fakeApi("Finish Feature"));

    // Hotfix
    document.getElementById("btn-start-hotfix").addEventListener("click", () => fakeApi("Start Hotfix"));
    document.getElementById("btn-finish-hotfix").addEventListener("click", () => fakeApi("Finish Hotfix"));

    // Release
    document.getElementById("btn-start-release").addEventListener("click", () => fakeApi("Start Release"));
    document.getElementById("btn-finish-release").addEventListener("click", () => fakeApi("Finish Release"));

    VSS.notifyLoadSucceeded();
});
