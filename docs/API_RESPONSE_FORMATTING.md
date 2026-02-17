# API Response Formatting Guide

A practical guide to working with API responses in the browser using JSON Formatter.

## Overview

When developing, testing, or debugging REST APIs, you need a fast way to read and understand JSON responses. JSON Formatter provides multiple ways to format API responses depending on your situation.

## Method 1: Auto-Detection (Direct Navigation)

The simplest approach -- navigate directly to an API endpoint in Chrome.

### How It Works

JSON Formatter includes a content script that runs on every page. When it detects a JSON page, it adds a floating purple "Format with JSON Formatter" button in the top-right corner.

The detection checks three conditions:
1. The `Content-Type` header includes `application/json`
2. The URL path ends with `.json`
3. The page body contains a single `<pre>` element with valid JSON

### Steps

1. Enter the API URL in your browser's address bar
2. Wait for the page to load -- you should see raw JSON text
3. Look for the purple "Format with JSON Formatter" button (top-right)
4. Click the button

The page content is replaced with formatted, syntax-highlighted JSON:
- **Keys** are highlighted in indigo/purple
- **String values** in green
- **Numbers** in yellow/amber
- **Booleans** in pink
- **Null** in gray italic

### When to Use This Method

- Testing GET endpoints during development
- Checking API responses from third-party services
- Viewing `.json` files hosted on the web
- Quick inspection of public APIs

### Limitations

- Only works with GET requests (you cannot send POST/PUT from the address bar)
- Some APIs require authentication headers that the browser does not send by default
- APIs that return JSON with a `text/html` content type may not be detected

## Method 2: Popup Editor (Copy-Paste)

For responses you cannot navigate to directly, or when you get JSON from other tools.

### Steps

1. Copy the JSON response body from your source (DevTools, Postman, curl, etc.)
2. Click the JSON Formatter icon in your Chrome toolbar
3. If your clipboard contains JSON, it is auto-pasted into the editor
4. Click **Format** (or press Ctrl+Shift+F / Cmd+Shift+F) to beautify

### Features Available in the Popup

After pasting a response, you can:

- **Format**: Beautify with your configured indentation
- **Validate**: Check for syntax errors with line and column numbers
- **Minify**: Compress to a single line
- **Tree view**: Switch to an interactive collapsible tree to explore nested data
- **Search**: In tree view, search by key or value to find specific fields
- **Copy**: Copy the formatted output back to your clipboard
- **Download**: Save as a `.json` file

### When to Use This Method

- Working with POST/PUT/DELETE response bodies
- Responses from authenticated APIs (where you use DevTools or Postman)
- JSON from non-browser tools (curl, httpie, server logs)
- When you need to validate or minify the response

## Method 3: Context Menu (Selected Text)

For JSON embedded in web pages, log viewers, or documentation.

### Steps

1. Select JSON text on any web page
2. Right-click to open the context menu
3. Choose from the **JSON Formatter** submenu:
   - **Format Selected JSON**: Formats and copies to clipboard
   - **Validate Selected JSON**: Shows valid/invalid in the extension badge
   - **Minify Selected JSON**: Minifies and copies to clipboard

### When to Use This Method

- JSON in application logs displayed in a web-based log viewer
- Debug output on a web page
- API documentation with example responses
- JSON embedded in HTML attributes or JavaScript strings

## Practical Examples

### Example 1: Debugging a 404 Response

Your API returns a 404 with an error body. Copy the response body from DevTools:

```json
{"error":"Not Found","message":"User with ID 12345 does not exist","statusCode":404,"timestamp":"2024-01-15T10:30:00Z"}
```

Paste into JSON Formatter and click Format:

```json
{
  "error": "Not Found",
  "message": "User with ID 12345 does not exist",
  "statusCode": 404,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Example 2: Exploring a Complex Response

A paginated API returns a large response with nested objects. After formatting, switch to Tree view:

```
response
  data            Array(25)
    [0]           {5 keys}
      id          1
      name        "Alice"
      email       "alice@example.com"
      roles       Array(2)
      created_at  "2024-01-01T00:00:00Z"
    [1]           {5 keys}
    ...
  pagination      {4 keys}
    page          1
    per_page      25
    total         142
    total_pages   6
```

Use the search bar to find specific fields. Type "email" to filter the tree to only show nodes containing "email" in keys or values.

### Example 3: Comparing Two Response Versions

Enable "Sort keys" in settings, then format v1 and v2 of an API response. With keys sorted alphabetically, the output is easier to diff:

**v1 (sorted)**:
```json
{
  "email": "alice@example.com",
  "id": 1,
  "name": "Alice"
}
```

**v2 (sorted)**:
```json
{
  "avatar_url": "https://example.com/alice.jpg",
  "email": "alice@example.com",
  "id": 1,
  "name": "Alice Smith"
}
```

The added `avatar_url` field and changed `name` value are immediately visible.

## Tips

- **Auto-paste** is enabled by default. Open the popup right after copying JSON and it will be there.
- **Indentation** can be quickly changed by clicking the status bar indicator (cycles through 2, 4, 8 spaces).
- **Statistics** in the status bar show key count, nesting depth, and file size -- useful for understanding the shape of a response.
- **Download** large formatted responses as `.json` files for further analysis in your code editor or with `jq`.

---

[Install JSON Formatter](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp) | [View Source](https://github.com/theluckystrike/json-formatter-chrome-extension)
