/**
 * JSON Formatter - Storage Utilities
 * Manages settings and history using Chrome storage
 *
 * @author Zovo (https://zovo.one)
 * @license MIT
 */

const DEFAULTS = {
    // Editor settings
    indent: 2,
    sortKeys: false,
    theme: 'dark',
    fontSize: 13,
    wordWrap: true,
    showLineNumbers: true,
    autoFormat: false,

    // Usage tracking (local only)
    usageCount: 0,
    installedAt: null,
    lastUsedAt: null,
    onboardingComplete: false,

    // History
    history: []
};

// Check if Chrome storage API is available (not available when running as file://)
const isChromeStorageAvailable = () => {
    return typeof chrome !== 'undefined' &&
        chrome.storage &&
        chrome.storage.local;
};

const Storage = {
    /**
     * Get a single value from storage
     * @param {string} key - Storage key
     * @returns {Promise<any>}
     */
    async get(key) {
        if (!isChromeStorageAvailable()) {
            return DEFAULTS[key];
        }
        try {
            const result = await chrome.storage.local.get({ [key]: DEFAULTS[key] });
            return result[key];
        } catch (error) {
            console.error(`Storage.get error for ${key}:`, error);
            return DEFAULTS[key];
        }
    },

    /**
     * Get all settings from storage
     * @returns {Promise<Object>}
     */
    async getAll() {
        if (!isChromeStorageAvailable()) {
            return { ...DEFAULTS };
        }
        try {
            return await chrome.storage.local.get(DEFAULTS);
        } catch (error) {
            console.error('Storage.getAll error:', error);
            return { ...DEFAULTS };
        }
    },

    /**
     * Set a single value in storage
     * @param {string} key - Storage key
     * @param {any} value - Value to store
     * @returns {Promise<void>}
     */
    async set(key, value) {
        if (!isChromeStorageAvailable()) {
            return;
        }
        try {
            await chrome.storage.local.set({ [key]: value });
        } catch (error) {
            console.error(`Storage.set error for ${key}:`, error);
        }
    },

    /**
     * Set multiple values in storage
     * @param {Object} data - Key-value pairs to store
     * @returns {Promise<void>}
     */
    async setMultiple(data) {
        if (!isChromeStorageAvailable()) {
            return;
        }
        try {
            await chrome.storage.local.set(data);
        } catch (error) {
            console.error('Storage.setMultiple error:', error);
        }
    },

    /**
     * Increment a numeric value
     * @param {string} key - Storage key
     * @returns {Promise<number>}
     */
    async increment(key) {
        const current = await this.get(key);
        const newValue = (current || 0) + 1;
        await this.set(key, newValue);
        return newValue;
    },

    /**
     * Initialize storage on first install
     * @returns {Promise<void>}
     */
    async initialize() {
        const { installedAt } = await chrome.storage.local.get('installedAt');
        if (!installedAt) {
            await this.setMultiple({
                installedAt: Date.now(),
                usageCount: 0,
                history: []
            });
        }
    },

    /**
     * Track a usage event
     * @returns {Promise<number>} New usage count
     */
    async trackUsage() {
        await this.set('lastUsedAt', Date.now());
        return this.increment('usageCount');
    },

    // =====================
    // History Management
    // =====================

    /**
     * Get format history
     * @returns {Promise<Array>}
     */
    async getHistory() {
        return this.get('history');
    },

    /**
     * Add entry to format history
     * @param {string} json - JSON string (truncated if too large)
     * @returns {Promise<void>}
     */
    async addToHistory(json) {
        const history = await this.getHistory();

        // Truncate large JSON
        const maxSize = 10000;
        const truncatedJson = json.length > maxSize
            ? json.substring(0, maxSize) + '...'
            : json;

        // Create history entry
        const entry = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            json: truncatedJson,
            size: json.length,
            timestamp: new Date().toISOString()
        };

        // Add to beginning
        history.unshift(entry);

        // Keep last 10 entries
        const trimmed = history.slice(0, 10);

        await this.set('history', trimmed);
    },

    /**
     * Clear all history
     * @returns {Promise<void>}
     */
    async clearHistory() {
        await this.set('history', []);
    },

    /**
     * Delete a single history entry
     * @param {string} id - History entry ID
     * @returns {Promise<boolean>}
     */
    async deleteHistoryEntry(id) {
        const history = await this.getHistory();
        const filtered = history.filter(h => h.id !== id);

        if (filtered.length === history.length) return false;

        await this.set('history', filtered);
        return true;
    }
};

// Export for use in extension
if (typeof window !== 'undefined') {
    window.Storage = Storage;
}
