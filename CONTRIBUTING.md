# Contributing to JSON Formatter

Thank you for your interest in contributing to JSON Formatter! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

1. Check the [existing issues](https://github.com/theluckystrike/json-formatter-chrome-extension/issues) to avoid duplicates
2. Use the [bug report template](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new?template=bug_report.md)
3. Include steps to reproduce, expected behavior, and actual behavior
4. Include your Chrome version and OS

### Suggesting Features

1. Check [existing feature requests](https://github.com/theluckystrike/json-formatter-chrome-extension/issues?q=label%3Aenhancement)
2. Use the [feature request template](https://github.com/theluckystrike/json-formatter-chrome-extension/issues/new?template=feature_request.md)
3. Describe the problem your feature would solve

### Pull Requests

1. Fork the repository
2. Create a feature branch from `main`: `git checkout -b feature/my-feature`
3. Make your changes
4. Test the extension locally by loading it as an unpacked extension
5. Commit with clear, descriptive messages
6. Push to your fork and open a Pull Request

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/theluckystrike/json-formatter-chrome-extension.git
   cd json-formatter-chrome-extension
   ```

2. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the repository directory

3. Make changes and reload the extension to test

### Code Style

- Use vanilla JavaScript (no frameworks or build tools required)
- Follow the existing code patterns and conventions
- Add JSDoc comments for public functions
- Keep functions focused and well-named

### Architecture

- `manifest.json` - Extension manifest (Manifest V3)
- `src/popup/` - Main popup UI (HTML, CSS, JS)
- `src/background/` - Service worker for background tasks
- `src/content/` - Content scripts for JSON page detection
- `src/lib/` - Core utility libraries (JSON parsing, storage)
- `src/shared/` - Shared styles and components
- `src/onboarding/` - First-run onboarding flow
- `_locales/` - Internationalization strings
- `assets/` - Icons and static assets

### Testing

- Test all core features: format, minify, validate, copy, download
- Test tree view with various JSON structures
- Test with both valid and invalid JSON
- Test in both light and dark themes
- Test the content script on JSON API endpoints

## Code of Conduct

Be respectful, inclusive, and constructive. We are all here to build great tools for developers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
