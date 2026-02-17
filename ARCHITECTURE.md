# JSON Formatter — Technical Architecture

## High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Chrome Browser                     │
│                                                      │
│  ┌────────────┐  ┌────────────┐  ┌───────────────┐  │
│  │   Popup    │  │  Options   │  │Content Script  │  │
│  │  (UI)      │  │   Page     │  │(JSON detection │  │
│  │            │  │            │  │ & formatting)  │  │
│  └─────┬──────┘  └─────┬──────┘  └───────┬───────┘  │
│        │               │                 │           │
│        └───────────┬────┘─────────────────┘           │
│                    │  Chrome Messages API             │
│             ┌──────▼──────┐                          │
│             │   Service   │                          │
│             │   Worker    │                          │
│             └──────┬──────┘                          │
│                    │                                 │
│             ┌──────▼──────┐                          │
│             │chrome.storage│                         │
│             │   .local     │                         │
│             └─────────────┘                          │
└─────────────────────────────────────────────────────┘
```

## Module Descriptions

| Module | File | Responsibility |
|--------|------|---------------|
| **Content Script** | `content.js` | Detects JSON responses, parses and renders formatted output |
| **Formatter Engine** | `formatter.js` | Syntax highlighting, collapsible nodes, search functionality |
| **Service Worker** | `background.js` | Content-type detection, configuration management |
| **Popup UI** | `popup.js` | Theme toggle, format settings, copy/download actions |
| **Options Page** | `options.js` | Indentation preferences, theme customization, URL filters |

## Data Flow

1. **Detection**: When a page loads, the content script checks the `Content-Type` header (via the service worker) and inspects the document body for valid JSON.
2. **Parsing**: Raw JSON is parsed using `JSON.parse()` with error handling for malformed input.
3. **Rendering**: The formatter engine transforms the parsed JSON into a collapsible, syntax-highlighted DOM tree.
4. **Interaction**: Users can collapse/expand nodes, search within the JSON, copy paths, and switch between raw and formatted views.

## Chrome Extension APIs Used

| API | Purpose |
|-----|---------|
| `chrome.webRequest` | Intercept response headers for content-type detection |
| `chrome.storage.local` | Persist user preferences (theme, indent, filters) |
| `chrome.runtime` | Message passing between content script and service worker |
| `chrome.action` | Toggle formatter on/off per tab |
| `chrome.tabs` | Query active tab for URL-based filtering |

## Build & Development

```bash
# Clone the repository
git clone https://github.com/theluckystrike/json-formatter-chrome-extension.git
cd json-formatter-chrome-extension

# Load as unpacked extension
# 1. Open chrome://extensions
# 2. Enable Developer Mode
# 3. Click "Load unpacked" and select the project directory

# No build step required — vanilla JavaScript
```

### Project Structure

```
├── manifest.json        # Extension manifest (MV3)
├── background.js        # Service worker
├── content/             # Content scripts and formatter
├── popup/               # Popup UI
├── options/             # Settings page
├── themes/              # Syntax highlighting themes
├── icons/               # Extension icons
└── lib/                 # Shared utilities
```

## Design Decisions

- **DOM-Based Rendering**: JSON is rendered as real DOM nodes (not innerHTML) for security and interactivity.
- **Lazy Node Expansion**: Large JSON trees only render visible nodes, keeping memory usage low even for multi-megabyte responses.
- **No External Dependencies**: Zero third-party libraries — the entire formatter is custom-built.
- **Content-Type Aware**: Respects MIME types rather than blindly parsing every page, avoiding false positives.
