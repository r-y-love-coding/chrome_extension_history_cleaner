# YouTube History Cleaner

A lightweight Chrome extension that helps users manage and delete their YouTube watch history in bulk based on channel or keyword.

## 🔧 Features

- 🧹 **Bulk delete history from a specific YouTube channel**
- 🔍 **Search history by keyword and delete selected items**

## 🚀 How to Use

1. Open the extension popup.
2. To delete history from a channel:
   - Enter the channel name or part of the URL.
   - Click **Delete by Channel**.
3. To search by keyword:
   - Enter a keyword.
   - Click **Search**.
   - Select entries and click **Delete Selected**.

## 🛠 Installation (for local development)

1. Clone this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the project folder.

## 📂 File Structure

- `manifest.json`: Chrome extension configuration
- `popup.html`: User interface
- `popup.js`: Front-end logic for popup
- `background.js`: Placeholder for future background tasks
- `styles.css`: Simple UI styles
- `icons/`: Folder for extension icons

## 🛡 Permissions

- `history`: To read and delete browser history
- `tabs`: Required for popup functionality
- `storage`: (Reserved for future features)

## 📜 License

MIT License
