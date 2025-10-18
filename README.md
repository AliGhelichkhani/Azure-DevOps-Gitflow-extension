# 🚀 Azure DevOps GitFlow Extension

A lightweight and modern **Azure DevOps extension** that adds **GitFlow workflow controls** directly into your repository menu — built with **Fluent UI**, **VSS SDK**, and **JavaScript**.

![GitFlow Screenshot](wwwroot/images/screenshot.png)

---

## ✨ Features

- 🧭 **Full GitFlow support** (Feature, Release, Hotfix, etc.)
- 🎨 **Azure DevOps-themed Fluent UI design**
- 🧱 Works as a **Repository Hub Tab**
- 🔍 **Simulated API calls** for testing (no backend required)
- 💬 Real-time **console logs** for each GitFlow action
- ⚙️ Ready for future integration with **Git and Azure DevOps REST APIs**

---

## 🧑‍💻 Local Development

### 1️⃣ Install the TFX CLI
```bash
npm install -g tfx-cli
```
2️⃣ Package the Extension
```bash
tfx extension create --manifest-globs vss-extension.json
```

3️⃣ Test Locally

Run the backend (if you have one) and open:
```bash
https://localhost:44388/view/index.html
```
4️⃣ Publish to Azure DevOps
```bash
tfx extension publish --manifest-globs vss-extension.json --publisher <your_publisher_id>
```

Then open your organization → Organization Settings → Extensions → Shared → install your extension.

🧩 Usage

Navigate to Repos → Your Repository

Click the “GitFlow” tab in the top menu

Use the buttons:
🧠 Start Feature
✅ Finish Feature
🚀 Start Release
🏁 Finish Release
🔥 Hotfix

⚙️ Tech Stack
Layer	Technology
UI	Fluent UI, HTML5, CSS3
SDK	VSS Web Extension SDK
Logic	JavaScript (ES6)
Packaging	TFX CLI
Host	Azure DevOps Server / Services

🧑‍🤝‍🧑 Contributing
We welcome contributions! See CONTRIBUTING.md
 for details.

📄 License
This project is licensed under the MIT License
 — free for personal and commercial use.

🌟 Author
Ali Ghelichkhani
💼 LinkedIn
💻 GitHub
