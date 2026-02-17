# Frequently Asked Questions

## How do I format JSON in Chrome?

Install JSON Formatter from the [Chrome Web Store](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp), then click the extension icon in your toolbar to open the popup. Paste your JSON into the editor and click the "Format" button, or use the keyboard shortcut Ctrl+Shift+F (Cmd+Shift+F on Mac). You can also select JSON text on any web page, right-click, and choose "Format Selected JSON" from the context menu. The formatted result is instantly available to copy or download.

## Does it auto-detect JSON on web pages?

Yes. JSON Formatter includes a content script that checks every page you visit. It detects JSON pages by inspecting the content type (`application/json`), the URL (files ending in `.json`), and the page body (a single `<pre>` element containing valid JSON). When it finds a JSON page, it adds a floating purple "Format with JSON Formatter" button in the top-right corner. Clicking the button formats the page in place with syntax highlighting.

## What keyboard shortcuts are available?

Press **Ctrl+Shift+F** (or **Cmd+Shift+F** on Mac) to format the JSON in the popup editor. Press **Tab** to insert spaces at the cursor position, matching your configured indentation level (2, 4, or 8 spaces). These shortcuts work within the extension popup and do not conflict with Chrome or system shortcuts.

## Can I format large JSON files?

JSON Formatter can handle reasonably large JSON documents. The auto-paste feature has a 100 KB limit for clipboard content to keep the popup responsive, but you can paste larger documents manually. The tree view renders with expandable nodes so even deeply nested documents stay navigable. For very large files (multiple megabytes), there may be some delay during formatting or tree rendering. In those cases, consider formatting the JSON and using the download button to save it as a `.json` file for further work in a desktop editor.

## Does it work offline?

Yes. JSON Formatter runs entirely in your browser with no network requests. All formatting, validation, minification, and tree rendering happen locally using JavaScript. Once installed, the extension works whether you are online or offline. Your JSON data never leaves your machine.

## Is it open source?

Yes. JSON Formatter is fully open source under the [MIT license](LICENSE). The complete source code is available on [GitHub](https://github.com/theluckystrike/json-formatter-chrome-extension). You can read every line of code, verify that no data is collected, fork the project, or contribute improvements.

## How do I switch between themes?

Open the extension popup and click the gear icon to open settings. Click "Light" or "Dark" to switch themes. The change is applied immediately and saved for future sessions. The dark theme uses a dark background with high-contrast syntax colors, while the light theme uses a white background with adjusted colors for bright environments.

## What is the difference between tree view and raw view?

The **editor view** (raw view) shows your JSON as plain text in a text area with line numbers, real-time validation, and error highlighting. This is where you paste, edit, and format JSON. The **tree view** displays parsed JSON as an interactive, collapsible hierarchy where each object and array can be expanded or collapsed. You can search within the tree by key or value, and clicking any leaf value copies it to your clipboard. Both views show the same data -- switching between them does not modify your JSON.

## How do I sort keys alphabetically?

Open settings (gear icon) and enable "Sort keys." The next time you format JSON, all object keys at every nesting level will be sorted in alphabetical order. This is useful for comparing JSON documents or maintaining consistent key order across team members.

## Does it support languages other than English?

Yes. JSON Formatter is localized in 7 languages: English, Spanish, French, German, Japanese, Chinese (Simplified), and Portuguese. The extension automatically uses your Chrome language setting to display translated UI labels and messages.

## How do I report a bug or request a feature?

You can [open an issue on GitHub](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new) or participate in [GitHub Discussions](https://github.com/theluckystrike/json-formatter-chrome-extension/discussions). Include steps to reproduce, your Chrome version, and any error messages to help with diagnosis.

---

[Install JSON Formatter](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp) | [View Source](https://github.com/theluckystrike/json-formatter-chrome-extension)
