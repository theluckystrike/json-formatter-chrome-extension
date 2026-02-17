# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in JSON Formatter, please report it responsibly.

### How to Report

1. **Do NOT open a public issue** for security vulnerabilities
2. Email us at **hello@zovo.one** with:
   - A description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- We will acknowledge your report within 48 hours
- We will provide an estimated timeline for a fix
- We will notify you when the vulnerability is fixed
- We will credit you in the release notes (unless you prefer anonymity)

## Security Design

JSON Formatter is designed with security as a priority:

- **No remote code execution** - All JSON processing happens locally in the browser
- **No data collection** - Your JSON data never leaves your browser
- **No analytics or tracking** - Zero telemetry
- **No external API calls** - Everything runs offline
- **Manifest V3** - Built on Chrome's latest, most secure extension platform
- **Content Security Policy** - Strict CSP prevents script injection
- **Open source** - Every line of code is publicly auditable

## Permissions Explained

| Permission       | Reason                                           |
| ---------------- | ------------------------------------------------ |
| `storage`        | Save user preferences (theme, indent size, etc.) |
| `clipboardWrite` | Copy formatted JSON to clipboard                 |
| `clipboardRead`  | Auto-paste JSON from clipboard on popup open     |
| `activeTab`      | Format selected JSON on the current page         |
| `contextMenus`   | Right-click menu for format/validate/minify      |
| `scripting`      | Execute clipboard operations on active tab       |
