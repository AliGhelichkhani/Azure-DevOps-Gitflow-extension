function loadApi() {
    fetch("https://localhost:44388/api/home")
        .then(r => r.json())
        .then(d => document.getElementById("result").innerText = d.message)
        .catch(err => {
            console.error("API error:", err);
            document.getElementById("result").innerText = "Error connecting to API";
        });
}

if (typeof VSS !== "undefined" && window.parent !== window) {
    console.log("Running inside Azure DevOps extension");

VSS.init({explicitNotifyLoaded: true });

    VSS.ready(() => {
    loadApi();
VSS.notifyLoadSucceeded();
    });
} else {
    console.log("Running in local development mode");
    document.addEventListener("DOMContentLoaded", () => {
    loadApi();
    });
}