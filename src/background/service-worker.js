/**
 * JSON Formatter - Service Worker
 * Background script for extension lifecycle and messaging
 *
 * @author Zovo (https://zovo.one)
 * @license MIT
 */

// =====================
// INSTALLATION & STARTUP
// =====================

chrome.runtime.onInstalled.addListener(async (details) => {
    try {
        console.log('[JSON Formatter] onInstalled:', details.reason);

        if (details.reason === 'install') {
            // First install - initialize storage and open onboarding
            await initializeStorage();

            // Check if onboarding should be shown
            const { onboardingComplete } = await chrome.storage.local.get('onboardingComplete');
            if (!onboardingComplete) {
                chrome.tabs.create({ url: 'src/onboarding/onboarding.html' });
            }
        } else if (details.reason === 'update') {
            // Extension updated
            console.log('[JSON Formatter] Updated to version:', chrome.runtime.getManifest().version);
        }

        // Set up context menus
        await setupContextMenus();
    } catch (error) {
        console.error('[JSON Formatter] onInstalled error:', error);
    }
});

chrome.runtime.onStartup.addListener(async () => {
    try {
        console.log('[JSON Formatter] onStartup');
        await setupContextMenus();
    } catch (error) {
        console.error('[JSON Formatter] onStartup error:', error);
    }
});

// =====================
// STORAGE INITIALIZATION
// =====================

async function initializeStorage() {
    const defaults = {
        indent: 2,
        sortKeys: false,
        theme: 'dark',
        fontSize: 13,
        wordWrap: true,
        showLineNumbers: true,
        autoFormat: false,
        usageCount: 0,
        installedAt: Date.now(),
        lastUsedAt: null,
        onboardingComplete: false,
        history: []
    };

    // Only set values that don't exist
    const existing = await chrome.storage.local.get(Object.keys(defaults));
    const toSet = {};

    for (const [key, value] of Object.entries(defaults)) {
        if (existing[key] === undefined) {
            toSet[key] = value;
        }
    }

    if (Object.keys(toSet).length > 0) {
        await chrome.storage.local.set(toSet);
        console.log('[JSON Formatter] Initialized storage:', Object.keys(toSet));
    }
}

// =====================
// CONTEXT MENUS
// =====================

async function setupContextMenus() {
    // Remove all existing menus first to avoid duplicates
    await chrome.contextMenus.removeAll();

    // Create main menu
    chrome.contextMenus.create({
        id: 'json-formatter',
        title: 'JSON Formatter',
        contexts: ['selection']
    }, handleMenuError);

    // Format selection
    chrome.contextMenus.create({
        id: 'format-selection',
        parentId: 'json-formatter',
        title: 'Format Selected JSON',
        contexts: ['selection']
    }, handleMenuError);

    // Validate selection
    chrome.contextMenus.create({
        id: 'validate-selection',
        parentId: 'json-formatter',
        title: 'Validate Selected JSON',
        contexts: ['selection']
    }, handleMenuError);

    // Minify selection
    chrome.contextMenus.create({
        id: 'minify-selection',
        parentId: 'json-formatter',
        title: 'Minify Selected JSON',
        contexts: ['selection']
    }, handleMenuError);
}

function handleMenuError() {
    if (chrome.runtime.lastError) {
        console.log('[JSON Formatter] Context menu:', chrome.runtime.lastError.message);
    }
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    const selectedText = info.selectionText;

    if (!selectedText) return;

    switch (info.menuItemId) {
        case 'format-selection':
            await handleFormatSelection(selectedText, tab);
            break;
        case 'validate-selection':
            await handleValidateSelection(selectedText, tab);
            break;
        case 'minify-selection':
            await handleMinifySelection(selectedText, tab);
            break;
    }
});

async function handleFormatSelection(text, tab) {
    try {
        const data = JSON.parse(text);
        const formatted = JSON.stringify(data, null, 2);

        // Copy to clipboard - check if tab exists first
        if (tab && tab.id) {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: (text) => {
                    navigator.clipboard.writeText(text);
                },
                args: [formatted]
            });
        }

        showNotification('Formatted JSON copied to clipboard!');
    } catch (e) {
        showNotification('Invalid JSON: ' + e.message);
    }
}

async function handleValidateSelection(text, tab) {
    try {
        JSON.parse(text);
        showNotification('Valid JSON');
    } catch (e) {
        showNotification('Invalid JSON: ' + e.message);
    }
}

async function handleMinifySelection(text, tab) {
    try {
        const data = JSON.parse(text);
        const minified = JSON.stringify(data);

        // Check if tab exists first
        if (tab && tab.id) {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: (text) => {
                    navigator.clipboard.writeText(text);
                },
                args: [minified]
            });
        }

        showNotification('Minified JSON copied to clipboard!');
    } catch (e) {
        showNotification('Invalid JSON: ' + e.message);
    }
}

// =====================
// NOTIFICATIONS
// =====================

function showNotification(message) {
    // Use badge text briefly as a simple notification
    chrome.action.setBadgeText({ text: '!' });
    chrome.action.setBadgeBackgroundColor({ color: '#7C3AED' });
    chrome.action.setTitle({ title: message });

    setTimeout(() => {
        chrome.action.setBadgeText({ text: '' });
        chrome.action.setTitle({ title: 'JSON Formatter' });
    }, 3000);
}

// =====================
// MESSAGE HANDLING
// =====================

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('[JSON Formatter] Message received:', message.action);

    switch (message.action) {
        case 'getSettings':
            chrome.storage.local.get(null).then(settings => {
                sendResponse({ success: true, settings });
            });
            return true; // Async response

        case 'saveSettings':
            chrome.storage.local.set(message.settings).then(() => {
                sendResponse({ success: true });
            });
            return true;

        case 'formatJSON':
            try {
                const data = JSON.parse(message.json);
                const formatted = JSON.stringify(data, null, message.indent || 2);
                sendResponse({ success: true, result: formatted });
            } catch (e) {
                sendResponse({ success: false, error: e.message });
            }
            break;

        case 'validateJSON':
            try {
                JSON.parse(message.json);
                sendResponse({ success: true, valid: true });
            } catch (e) {
                sendResponse({ success: true, valid: false, error: e.message });
            }
            break;

        case 'openOnboarding':
            chrome.tabs.create({ url: 'src/onboarding/onboarding.html' });
            sendResponse({ success: true });
            break;

        default:
            sendResponse({ success: false, error: 'Unknown action' });
    }
});

// =====================
// TAB DETECTION (for JSON pages)
// =====================

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status !== 'complete') return;
    if (!tab.url) return;

    // Check if this might be a JSON page
    const jsonIndicators = [
        tab.url.endsWith('.json'),
        tab.url.includes('/api/'),
        tab.url.includes('application/json')
    ];

    if (jsonIndicators.some(Boolean)) {
        console.log('[JSON Formatter] Potential JSON page detected:', tab.url);
    }
});

console.log('[JSON Formatter] Service worker loaded');
