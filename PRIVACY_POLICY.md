# Privacy Policy — JSON Formatter

**Last updated:** February 2026

## Overview

JSON Formatter is committed to protecting your privacy. This extension processes all data locally within your browser and does not collect, transmit, or share any personal data.

## Data Access

JSON Formatter accesses the following browser data solely to provide its core functionality:

- **Page content** — The extension reads page content to detect and format JSON responses. This data is processed entirely in-browser and never sent externally.
- **Response headers** — Content-Type headers are checked to identify JSON responses.

## Data Storage

All data is stored locally on your device using `chrome.storage.local`:

| Data | Purpose | Location |
|------|---------|----------|
| Theme preference | Remember your chosen color scheme | Local storage |
| Indentation settings | Apply your preferred formatting | Local storage |
| URL filters | Enable/disable formatter for specific sites | Local storage |

**No data is stored on external servers.**

## Data Transmission

JSON Formatter does **not** transmit any data to external servers. Specifically:

- No page content is sent anywhere
- No analytics or telemetry are collected
- No browsing history is recorded or shared
- No personal information is transmitted to third parties
- No network requests are made by the extension

## Third-Party Services

JSON Formatter uses **no** third-party services, SDKs, or libraries that collect data.

## Permissions Explained

| Permission | Why it's needed |
|------------|----------------|
| `activeTab` | Access page content to detect and format JSON |
| `storage` | Save your formatting preferences locally |
| `webRequest` | Read response headers for content-type detection |

## Data Retention

User preferences persist until you uninstall the extension or clear them manually. No browsing data or page content is ever persisted.

## Children's Privacy

This extension does not knowingly collect any information from children under 13.

## Changes to This Policy

We may update this policy as the extension evolves. Changes will be reflected in the "Last updated" date above.

## Contact

If you have questions about this privacy policy, please open an issue on our [GitHub repository](https://github.com/theluckystrike/json-formatter-chrome-extension/issues) or contact us at support@zovo.dev.
