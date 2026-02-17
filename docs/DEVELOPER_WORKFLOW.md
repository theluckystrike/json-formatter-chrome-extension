# Developer Workflow Guide

How to use JSON Formatter in your daily development work. This guide covers practical workflows for formatting API responses, debugging JSON payloads, working with configuration files, and handling large datasets.

## Formatting REST API Responses

### Direct Page Formatting

Navigate to any API endpoint in your browser. JSON Formatter automatically detects JSON pages and shows a floating "Format with JSON Formatter" button in the top-right corner. Click it to format the entire page with syntax highlighting.

Example endpoints to try:
- `https://jsonplaceholder.typicode.com/posts`
- `https://jsonplaceholder.typicode.com/users/1`
- Any API you are developing locally (e.g., `http://localhost:3000/api/data`)

### Copy-Paste from DevTools

When inspecting API responses in Chrome DevTools:

1. Open the Network tab and trigger your API request
2. Click the request and go to the Response or Preview tab
3. Copy the response body
4. Click the JSON Formatter icon -- the response is auto-pasted
5. Click Format to beautify, or switch to Tree view to explore the structure

### Context Menu Formatting

When you see JSON embedded in web pages (log viewers, debug output, documentation):

1. Select the JSON text on the page
2. Right-click and choose **JSON Formatter > Format Selected JSON**
3. The formatted result is automatically copied to your clipboard

## Debugging JSON Payloads

### Finding Syntax Errors

When a request fails because of malformed JSON:

1. Paste the payload into JSON Formatter
2. The status bar immediately shows "Error at line X"
3. Click Validate for exact line and column numbers
4. The error line is highlighted in the line number gutter

Common JSON syntax errors:
- **Trailing commas**: `{"key": "value",}` -- remove the comma before `}`
- **Single quotes**: `{'key': 'value'}` -- use double quotes instead
- **Unquoted keys**: `{key: "value"}` -- all keys must be quoted
- **Comments**: JSON does not support `//` or `/* */` comments

### Minifying for Requests

When you need to send a compact JSON payload:

1. Paste your formatted JSON into the editor
2. Click **Minify** to compress it to a single line
3. Click **Copy** to put it on your clipboard
4. Paste into your API client, curl command, or request body

### Comparing Responses

To compare two API responses:

1. Open settings and enable **Sort keys**
2. Format the first response and copy it
3. Format the second response
4. With keys in alphabetical order, differences are easier to spot in a side-by-side comparison

## Working with Configuration Files

JSON configuration files (`package.json`, `tsconfig.json`, `.eslintrc.json`, `manifest.json`) benefit from JSON Formatter in several ways:

### Quick Validation

Before saving a config file, paste it into JSON Formatter to check for syntax errors. A misplaced comma or missing bracket can break your entire build. Catching it before saving avoids unnecessary debugging.

### Consistent Formatting

If your team uses different indentation styles, paste the config file, format it with your preferred indentation (2, 4, or 8 spaces), and copy the result back. This ensures consistency across the team.

### Structure Exploration

For large config files (Webpack configurations, complex TypeScript configs), switch to Tree view to navigate the structure without scrolling through hundreds of lines.

## Tips for Large Datasets

### Navigate with Tree View

The tree view is more efficient than scrolling through raw text for large documents. Each node shows a preview:
- Arrays: `Array(150)` -- shows the number of elements
- Objects: `{12 keys}` -- shows the number of keys

### Search Within the Tree

Type a key name or value in the search bar to filter the tree. Only matching nodes are shown. Search is case-insensitive and matches partial strings.

### Copy Individual Values

In tree view, click any leaf value (string, number, boolean, null) to copy it to your clipboard. This is faster than selecting text in a large formatted document.

### Download for External Tools

For files too large for comfortable popup browsing:

1. Paste the JSON and click Format
2. Click **Download** to save as a `.json` file
3. Open in VS Code, Sublime Text, or process with `jq`

### Reduce Payload Size

Click **Minify** before sharing large JSON payloads in bug reports, Slack messages, or emails. Minification removes all whitespace, significantly reducing size.

## Workflow Integration

JSON Formatter integrates naturally with:

- **Chrome DevTools**: Format responses copied from the Network tab
- **Terminal tools** (curl, httpie): Copy output and paste into JSON Formatter
- **VS Code**: Quick-validate JSON before committing, or download formatted files
- **Postman / Insomnia**: Format and validate response bodies
- **CI/CD pipelines**: Validate JSON config files before deployment

---

[Install JSON Formatter](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp) | [View Source](https://github.com/theluckystrike/json-formatter-chrome-extension)
