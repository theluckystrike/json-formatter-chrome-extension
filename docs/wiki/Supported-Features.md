# Supported Features

This page documents every feature in JSON Formatter with examples and usage details.

## Format and Beautify JSON

Transform minified or poorly formatted JSON into clean, indented output.

**How to use**: Paste JSON into the editor and click the "Format" button, or press Ctrl+Shift+F (Cmd+Shift+F on Mac).

**Before**:
```json
{"name":"Alice","age":30,"roles":["admin","editor"],"active":true}
```

**After (2-space indent)**:
```json
{
  "name": "Alice",
  "age": 30,
  "roles": [
    "admin",
    "editor"
  ],
  "active": true
}
```

You can configure indentation to 2, 4, or 8 spaces in settings or by clicking the indentation indicator in the status bar.

## Minify JSON

Compress formatted JSON to a single line with no whitespace, useful for production payloads or reducing data size.

**How to use**: Paste or format JSON in the editor, then click the "Minify" button.

**Before**:
```json
{
  "name": "Alice",
  "age": 30
}
```

**After**:
```json
{"name":"Alice","age":30}
```

## JSON Validation

Validate JSON syntax with detailed error reporting, including the exact line and column number of the error.

**How to use**: Paste JSON into the editor. The status bar shows real-time validation ("Valid JSON" or "Error at line X"). Click the "Validate" button for detailed results.

**Example error**: If you paste `{"name": "Alice", "age": 30,}` (trailing comma), the validator will report the line and column of the unexpected `}` character.

**Valid JSON example**: Clicking Validate on valid JSON shows a success message with statistics: "Valid JSON! 14 keys, depth 3".

## Collapsible Tree View

Explore JSON structures as an interactive, expandable tree.

**How to use**: Click the "Tree" tab at the top of the popup to switch from the editor to tree view.

**Features**:
- Each object and array node is expandable/collapsible
- Preview indicators show array length (e.g., "Array(5)") and object key count (e.g., "{3 keys}")
- Click any leaf value (string, number, boolean, null) to copy it to your clipboard
- Values are color-coded by type: strings, numbers, booleans, and null each have distinct colors

### Search in Tree View

Filter the tree by key or value.

**How to use**: In tree view, type a search query in the search bar at the top. The tree will filter to show only nodes whose keys or values match the query. Clear the search bar to show all nodes again.

Search is case-insensitive by default and matches partial strings, so searching for "name" will match keys like "firstName", "lastName", and "username".

## Auto-Detect JSON on Web Pages

The content script automatically detects when you navigate to a page containing raw JSON.

**How it works**: When you load a page, JSON Formatter checks:
1. Whether the content type is `application/json`
2. Whether the URL ends with `.json`
3. Whether the page body contains a single `<pre>` element with valid JSON

If any of these conditions are met, a floating purple "Format with JSON Formatter" button appears in the top-right corner of the page.

**Clicking the button** replaces the page content with formatted, syntax-highlighted JSON on a dark background. Keys, strings, numbers, booleans, and null values are each highlighted in a different color.

## Syntax Highlighting

JSON is displayed with color-coded syntax in both the on-page formatter and the tree view.

**Color scheme (dark theme, on-page)**:
- **Keys**: Indigo/purple
- **String values**: Green
- **Numbers**: Yellow/amber
- **Booleans**: Pink
- **Null**: Gray italic

## Dark and Light Themes

Switch between dark and light themes.

**How to use**: Open the popup, click the gear icon, and select "Light" or "Dark". The preference is saved automatically.

The dark theme uses a dark background with vibrant syntax colors, suitable for low-light environments. The light theme uses a white background with adjusted colors for readability in bright environments.

## Copy to Clipboard

Copy the current editor content to your clipboard.

**How to use**: Click the "Copy" button in the toolbar. A toast notification confirms the copy was successful.

In tree view, you can also click any individual leaf value to copy just that value.

## Download JSON as a File

Export the current editor content as a `.json` file.

**How to use**: Click the "Download" button in the toolbar. The file will be saved as `formatted-{timestamp}.json` to your downloads folder.

## Auto-Paste from Clipboard

When you open the popup with an empty editor, JSON Formatter checks your clipboard for JSON content and pastes it automatically.

**How it works**: The extension reads the clipboard, checks if the content starts with `{` or `[` and ends with `}` or `]`, and pastes it if it looks like JSON. Content larger than 100 KB is skipped to keep the popup responsive.

**Disabling**: Open settings (gear icon) and toggle off "Auto-paste from clipboard".

## Right-Click Context Menu

Format, validate, or minify selected JSON text on any web page.

**How to use**: Select JSON text on any web page, right-click, and choose from the "JSON Formatter" submenu:
- **Format Selected JSON**: Parses, formats, and copies the result to your clipboard
- **Validate Selected JSON**: Checks if the selected text is valid JSON and shows the result in the extension badge
- **Minify Selected JSON**: Minifies and copies the result to your clipboard

## Sort Keys Alphabetically

Optionally sort all object keys in alphabetical order when formatting.

**How to use**: Open settings (gear icon) and enable "Sort keys". The next time you format JSON, all object keys at every level of nesting will be sorted alphabetically.

**Example**:
```json
// Before sorting
{"zebra": 1, "apple": 2, "mango": 3}

// After formatting with sort keys enabled
{
  "apple": 2,
  "mango": 3,
  "zebra": 1
}
```

This is useful for comparing two JSON documents or for maintaining a consistent key order.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+Shift+F (Cmd+Shift+F on Mac) | Format JSON in the editor |
| Tab | Insert spaces at cursor (matches configured indentation) |

## JSON Statistics

The status bar at the bottom of the popup shows real-time statistics:
- **Validation status**: "Valid JSON", "Error at line X", or "Ready"
- **Key count**: Total number of keys in the JSON structure
- **Nesting depth**: Maximum depth of nested objects and arrays
- **File size**: Human-readable size (bytes, KB, or MB)

## Multi-Language Support

JSON Formatter is localized in 7 languages:
- English
- Spanish (Espanol)
- French (Francais)
- German (Deutsch)
- Japanese
- Chinese (Simplified)
- Portuguese (Portugues)

The extension automatically uses your Chrome language setting. UI labels, messages, and descriptions are translated accordingly.

## Onboarding Flow

New users see a guided welcome page when they first install the extension. The onboarding introduces the core features and helps users get started quickly. The onboarding page can be revisited through the service worker if needed.

---

[Back to Home](Home)
