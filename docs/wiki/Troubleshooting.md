# Troubleshooting

This page covers common issues and their solutions. If your issue is not listed here, please [open a GitHub issue](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new).

## The extension icon does not appear in the toolbar

After installing JSON Formatter, the icon may be hidden behind Chrome's extension menu.

**Solution**: Click the puzzle piece icon in the Chrome toolbar to see all installed extensions. Find JSON Formatter in the list and click the pin icon next to it. The JSON Formatter icon will now appear permanently in your toolbar.

## Auto-paste from clipboard does not work

JSON Formatter auto-pastes from your clipboard when the popup opens, but this requires clipboard read permission.

**Solution**: Make sure JSON Formatter has the "clipboardRead" permission. Go to `chrome://extensions/`, click "Details" on JSON Formatter, and verify the permissions are granted. Also note that auto-paste only works when the editor is empty and the clipboard contains text that looks like JSON (starts with `{` or `[` and ends with `}` or `]`). If the clipboard content is larger than 100 KB, auto-paste is skipped to keep the popup responsive. You can also disable auto-paste in settings if you prefer to paste manually.

## The floating "Format" button does not appear on a JSON page

The content script detects JSON pages by checking the content type (`application/json`), the URL (ending with `.json`), and the page body (a single `<pre>` element containing valid JSON).

**Solution**: Verify that the page is actually serving raw JSON. Some APIs return JSON with an HTML wrapper or a content type like `text/html`, which prevents detection. Try opening the URL directly in a new tab. If the page renders as a styled web page rather than raw text, the content script cannot detect it as JSON. In that case, copy the JSON and paste it into the popup instead.

If the detection should be working but the button does not appear, go to `chrome://extensions/`, find JSON Formatter, and check for errors in the "Errors" section. Try disabling and re-enabling the extension, then reload the page.

## "Format" or "Validate" shows an error

If you see an error like "Error at line X" when formatting or validating, the input is not valid JSON.

**Solution**: Common JSON syntax issues include:
- **Trailing commas**: JSON does not allow trailing commas after the last element in an object or array. Remove the comma before `}` or `]`.
- **Single quotes**: JSON requires double quotes for strings. Replace `'key': 'value'` with `"key": "value"`.
- **Unquoted keys**: All keys must be quoted. Replace `{key: "value"}` with `{"key": "value"}`.
- **Comments**: JSON does not support comments. Remove any `//` or `/* */` comments.
- **Missing values**: Ensure every key has a corresponding value, and every opening bracket has a closing bracket.

The status bar shows the line number where the error was detected. Click "Validate" for both line and column numbers to pinpoint the exact location.

## The context menu (right-click) options are missing

The context menu items ("Format Selected JSON", "Validate Selected JSON", "Minify Selected JSON") only appear when you have text selected on a page.

**Solution**: Select some text on a web page, then right-click. Look for the "JSON Formatter" submenu. If it does not appear, the context menu may not have been set up properly. Try restarting Chrome or reinstalling the extension. The context menu is created by the service worker when the extension is installed, so a reinstall should recreate it.

## The extension is slow with large JSON

For very large JSON documents (several megabytes), formatting and tree rendering may take noticeable time because all processing happens in the browser's main thread.

**Solution**:
- Use the editor view for large files instead of tree view, as rendering a large tree is more resource-intensive.
- Avoid unnecessary format/minify cycles on the same large document.
- If the popup becomes unresponsive, close and reopen it.
- For files larger than a few megabytes, consider using a desktop JSON tool or your code editor instead.

## Theme or settings are not saved

Settings (theme, indentation, sort keys, auto-paste) are stored in `chrome.storage.local`.

**Solution**: Make sure you are not using Chrome in a mode that clears extension data on exit (such as certain enterprise policies). Also verify that the extension has storage permissions by checking `chrome://extensions/`. If settings still do not persist, try removing and reinstalling the extension. Note that this will reset all settings to defaults.

## The extension does not work on certain pages

Chrome extensions cannot run on certain restricted pages, including:

- `chrome://` pages (like `chrome://settings` or `chrome://extensions`)
- `chrome-extension://` pages (other extensions' pages)
- The Chrome Web Store (`https://chromewebstore.google.com`)

**Solution**: This is a Chrome platform restriction and cannot be bypassed. Copy the JSON content manually and paste it into the JSON Formatter popup instead.

## How to report a bug

If you encounter an issue not covered here:

1. Check the [existing issues](https://github.com/theluckystrike/json-formatter-chrome-extension/issues) on GitHub to see if it has already been reported
2. If not, [open a new issue](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new) with:
   - A description of the problem
   - Steps to reproduce
   - Your Chrome version (found at `chrome://version`)
   - Any error messages from the extension (check `chrome://extensions/` for errors)

---

[Back to Home](Home)
