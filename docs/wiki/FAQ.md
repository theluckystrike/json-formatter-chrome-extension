# Frequently Asked Questions

## How do I format JSON in Chrome?

Install JSON Formatter from the [Chrome Web Store](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp), then click the extension icon in your toolbar to open the popup. Paste your JSON into the editor and click the "Format" button, or use the keyboard shortcut Ctrl+Shift+F (Cmd+Shift+F on Mac). You can also select JSON text on any web page, right-click, and choose "Format Selected JSON" from the context menu. The formatted result is instantly available to copy or download.

## Does it auto-detect JSON on web pages?

Yes. JSON Formatter includes a content script that runs on every page you visit. It checks whether the page contains raw JSON by inspecting the content type, the URL (files ending in `.json`), and the page body. When it detects a JSON page -- such as a REST API response or a `.json` file -- it adds a floating purple "Format with JSON Formatter" button in the top-right corner. Clicking that button formats the entire page in place with syntax highlighting, including color-coded keys, strings, numbers, booleans, and nulls.

## What keyboard shortcuts are available?

JSON Formatter supports two keyboard shortcuts in the popup editor. Press **Ctrl+Shift+F** (or **Cmd+Shift+F** on Mac) to format the JSON currently in the editor. Press **Tab** to insert spaces at the cursor position (the number of spaces matches your configured indentation: 2, 4, or 8). These shortcuts work within the extension popup. The extension does not currently register global Chrome keyboard shortcuts, so they will not interfere with shortcuts in other applications or web pages.

## Can I format large JSON files?

JSON Formatter can handle reasonably large JSON documents. The auto-paste feature has a 100 KB limit for clipboard content to keep the popup responsive, but you can paste larger documents manually into the editor. The tree view renders the full structure with expandable nodes, so even deeply nested documents remain navigable. For very large files (multiple megabytes), you may experience some delay during formatting or tree rendering, as the processing happens in the browser's main thread. If you regularly work with extremely large JSON files, consider using a dedicated desktop tool alongside the extension.

## Does it work offline?

Yes. JSON Formatter runs entirely in your browser with no network requests. All formatting, validation, minification, and tree rendering happen locally using JavaScript. Once installed, the extension works whether you are online or offline. It does not depend on any external API or server. Your JSON data never leaves your machine.

## Is it open source?

Yes. JSON Formatter is fully open source under the MIT license. The complete source code is available on [GitHub](https://github.com/theluckystrike/json-formatter-chrome-extension). You can read every line of code, verify that no data is collected, fork the project, or contribute improvements. The MIT license allows free use for both personal and commercial purposes.

## How do I switch between themes?

Open the extension popup and click the gear icon in the toolbar to open settings. You will see buttons for "Light" and "Dark" themes. Click your preferred theme and it will be applied immediately. The dark theme uses a dark background with high-contrast syntax highlighting colors, while the light theme uses a white background. Your theme preference is saved and persists across browser sessions using Chrome's local storage.

## What is the difference between tree view and raw view?

JSON Formatter offers two views in the popup. The **editor view** (raw view) shows your JSON as plain text in a text area with line numbers, syntax validation, and error highlighting. This is where you paste, edit, and format JSON. The **tree view** displays the parsed JSON as an interactive, collapsible hierarchy. Each object and array can be expanded or collapsed, and a preview shows the number of keys or array length. You can search within the tree by key or value using the search bar at the top. Clicking on a leaf value in the tree copies it to your clipboard. Both views show the same data -- switching between them does not modify your JSON.

---

[Back to Home](Home)
