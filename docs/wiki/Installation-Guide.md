# Installation Guide

## Chrome Web Store (Recommended)

The easiest way to install JSON Formatter is from the Chrome Web Store. This gives you automatic updates and one-click installation.

1. Visit the **[JSON Formatter listing on Chrome Web Store](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp)**
2. Click **"Add to Chrome"**
3. In the confirmation dialog, click **"Add extension"**
4. The JSON Formatter icon will appear in your Chrome toolbar

If you do not see the icon immediately, click the puzzle piece icon in the toolbar and pin JSON Formatter for quick access.

## Manual Install from Source (Developer Mode)

If you want to run the latest development version or contribute to the project, you can install directly from source.

### Prerequisites

- Google Chrome (version 102 or later)
- Git (to clone the repository)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/theluckystrike/json-formatter-chrome-extension.git
```

2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** using the toggle in the top-right corner
4. Click **"Load unpacked"**
5. Select the cloned `json-formatter-chrome-extension` directory
6. The extension will load and the icon will appear in your toolbar

### Updating a Manual Install

If you installed from source and want to update:

```bash
cd json-formatter-chrome-extension
git pull origin main
```

Then go to `chrome://extensions/` and click the refresh icon on the JSON Formatter card.

## Verifying It Works

After installation, you can verify that JSON Formatter is working correctly:

1. **Click the extension icon** in your toolbar. The popup should open with a sample JSON document already formatted with syntax highlighting.
2. **Test auto-detection** by navigating to any JSON API endpoint. For example, open `https://jsonplaceholder.typicode.com/todos/1` in your browser. You should see a floating purple "Format with JSON Formatter" button in the top-right corner of the page.
3. **Test the context menu** by selecting some JSON text on any web page, right-clicking, and looking for the "JSON Formatter" submenu with options to format, validate, or minify.

## First-Time Setup Tips

When you first install JSON Formatter, an onboarding page will open to walk you through the basics. Here are some additional tips to get started:

- **Theme**: JSON Formatter defaults to dark theme. Open the popup, click the gear icon, and switch to light theme if you prefer.
- **Indentation**: The default is 2 spaces. You can change this to 4 or 8 spaces in the settings, or click the indentation indicator in the status bar to cycle through options.
- **Auto-paste**: By default, when you open the popup, JSON Formatter will read your clipboard and automatically paste it if it looks like JSON. You can disable this in settings if you prefer manual pasting.
- **Sort keys**: Enable "Sort keys" in settings to automatically sort object keys alphabetically when formatting. This is useful for comparing JSON documents or maintaining consistent key order.
- **Pin the extension**: Click the puzzle piece icon in Chrome's toolbar and pin JSON Formatter so it is always one click away.

## Supported Browsers

JSON Formatter is built for Google Chrome and uses the Manifest V3 extension platform. It requires Chrome version 102 or later. It may also work in other Chromium-based browsers such as Microsoft Edge, Brave, and Opera, though these are not officially tested.

---

[Back to Home](Home)
