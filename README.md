# JSON Formatter — Free Open Source Chrome Extension

> Format, validate, and beautify JSON directly in your browser. A developer-friendly JSON viewer with syntax highlighting, collapsible tree view, and one-click copy.

<p align="center">
  <a href="https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp"><img src="https://img.shields.io/chrome-web-store/users/gbnadjkeegkhbcoeaeaoedpojlcknnhp?label=Chrome%20Web%20Store%20Users&color=blue" alt="Chrome Web Store Users"></a>
  <a href="https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp"><img src="https://img.shields.io/chrome-web-store/rating/gbnadjkeegkhbcoeaeaoedpojlcknnhp?label=Rating&color=gold" alt="Chrome Web Store Rating"></a>
  <img src="https://img.shields.io/github/license/theluckystrike/json-formatter-chrome-extension" alt="License">
  <img src="https://img.shields.io/github/last-commit/theluckystrike/json-formatter-chrome-extension" alt="Last Commit">
</p>

## Why JSON Formatter?

Every developer works with JSON. Whether you're debugging API responses, inspecting config files, or exploring data structures, you need a reliable way to format and validate JSON. Most JSON formatter extensions are closed source, bloated with ads, or collect your data.

**JSON Formatter** is built by developers, for developers. It's free, open source, and built on Chrome's latest Manifest V3 platform. It auto-detects JSON on web pages, formats it with syntax highlighting, and gives you a collapsible tree view to explore nested data structures.

## Features

- **Format and beautify JSON with one click** — Transform minified JSON into readable, indented output with configurable indentation (2, 4, or 8 spaces)
- **Minify JSON for compact output** — Compress formatted JSON to a single line for production use or smaller payloads
- **JSON validation with clear error messages** — Instantly spot syntax errors with precise line and column numbers, highlighted in the editor
- **Collapsible tree view for nested objects** — Explore complex JSON structures with expandable/collapsible nodes, search by key or value
- **Auto-detect JSON on web pages** — Content script automatically detects JSON API responses and `.json` files, adding a floating "Format" button
- **Syntax highlighting with dark and light themes** — Color-coded keys, strings, numbers, booleans, and nulls for easy reading
- **Copy formatted output to clipboard** — Share formatted JSON instantly with one click
- **Download JSON as a file** — Export your formatted JSON directly as a `.json` file
- **Auto-paste from clipboard** — Automatically pastes JSON from your clipboard when you open the popup
- **Right-click context menu** — Format, validate, or minify any selected JSON text on any web page
- **Sort keys alphabetically** — Optional setting to alphabetically sort object keys when formatting
- **Keyboard shortcuts** — `Ctrl+Shift+F` to format, `Tab` to insert spaces
- **JSON statistics** — Real-time key count, nesting depth, and file size in the status bar
- **Multi-language support** — Localized in English, Spanish, French, German, Japanese, Chinese, and Portuguese
- **Onboarding flow** — Guided introduction for new users

## Install

### Chrome Web Store (Recommended)

**[Install from Chrome Web Store](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp)** — One click install, automatic updates

### Manual Install (Developer)

1. Clone this repository:
   ```bash
   git clone https://github.com/theluckystrike/json-formatter-chrome-extension.git
   ```
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode** (toggle in top right)
4. Click **Load unpacked** and select the cloned directory
5. The extension icon will appear in your toolbar

## Privacy & Security

- **100% Open Source** — Every line of code is publicly auditable in this repository
- **No Data Collection** — Your JSON data never leaves your browser
- **No Analytics** — No tracking, no telemetry, no third-party scripts
- **No Remote Code** — Everything runs locally, no external API calls
- **No Ads** — Clean, distraction-free interface
- **Manifest V3** — Built on Chrome's latest, most secure extension platform
- **Strict CSP** — Content Security Policy prevents script injection

## Comparison

| Feature | JSON Formatter (Zovo) | JSON Viewer | JSON Editor Online | JSON Handle |
|---------|:--------------------:|:-----------:|:------------------:|:-----------:|
| Open Source | Yes | No | No | No |
| Free | Yes | Yes | Freemium | Yes |
| Manifest V3 | Yes | No | No | Yes |
| Auto-detect JSON | Yes | Yes | No | Yes |
| Tree View | Yes | Yes | Yes | Yes |
| No Data Collection | Yes | Unknown | No | Unknown |
| Syntax Highlighting | Yes | Yes | Yes | Limited |
| Dark + Light Theme | Yes | No | Yes | No |
| Context Menu | Yes | No | No | No |
| Sort Keys | Yes | No | Yes | No |
| Multi-language | 7 languages | English only | English only | English only |

## Architecture

```
json-formatter-chrome-extension/
├── manifest.json              # Chrome Extension Manifest V3
├── _locales/                  # Internationalization (7 languages)
├── assets/icons/              # Extension icons (16, 32, 48, 128px)
├── src/
│   ├── popup/                 # Main popup UI
│   │   ├── index.html         # Popup HTML
│   │   ├── popup.js           # Popup controller
│   │   └── popup.css          # Popup styles
│   ├── background/
│   │   └── service-worker.js  # Background service worker
│   ├── content/
│   │   └── json-detector.js   # JSON page detection & formatting
│   ├── lib/
│   │   ├── json-utils.js      # Core JSON utilities
│   │   └── storage.js         # Chrome storage management
│   ├── shared/
│   │   ├── variables.css      # Design system variables
│   │   └── zovo-brand.css     # Brand components
│   └── onboarding/
│       ├── onboarding.html    # Welcome flow
│       └── onboarding.js      # Onboarding controller
└── package.json
```

## Pro Version

Want even more power? [**JSON Formatter Pro**](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp) adds advanced features for professional workflows:

- JSON to YAML conversion
- Export JSON arrays to CSV
- JSON diff and comparison
- JSON Schema validation
- Unlimited history and snippets
- Priority support

## More from Zovo

| Extension | Description | Install |
|-----------|-------------|---------|
| **Tab Suspender Pro** | Save memory by suspending inactive tabs | [Install](https://chromewebstore.google.com/detail/tab-suspender-pro-save-me/ofgncemnlblfnocjbojdhamacfffcpnm) |
| **Cookie Manager** | View, edit, and manage browser cookies | [Install](https://chromewebstore.google.com/detail/cookie-manager/ijolfnkijbagodcigeebgjhlkdgcebmf) |
| **Regex Tester Pro** | Test and debug regular expressions | [Install](https://chromewebstore.google.com/detail/regex-tester-pro-by-zovo/laljckjnohfcbhmlehjkcppkdfibldad) |
| **Clipboard History Pro** | Never lose copied text again | [Install](https://chromewebstore.google.com/detail/clipboard-history-pro/ddmidpneacclepjmdjibmcdijedgdidf) |
| **Session Manager Pro** | Save and restore browser sessions | [Install](https://chromewebstore.google.com/detail/session-manager-pro-by-zo/mhbfbnmokccombamjdflafbakdlnehlh) |

## Support

- **Star this repo** if you find it useful
- **[Rate on Chrome Web Store](https://chromewebstore.google.com/detail/json-formatter-pro/gbnadjkeegkhbcoeaeaoedpojlcknnhp)** to help other developers discover it
- **[Report bugs](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new?template=bug_report.md)** if you find any issues
- **[Request features](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new?template=feature_request.md)** you'd like to see
- **Share** with developer friends who work with JSON
- **[Contribute](CONTRIBUTING.md)** code, bug reports, or translations

## License

[MIT License](LICENSE) — free for personal and commercial use.

---

Made with care by [Zovo](https://zovo.one) — Open source Chrome extensions for developers and productivity
