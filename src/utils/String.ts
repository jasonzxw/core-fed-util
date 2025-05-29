/**
 * @description Truncates a string to a specified length and appends a suffix if it exceeds that length.
 * @param str {string} The string to truncate
 * @param maxLen {number} The maximum length of the string
 * @param suffix {string} The suffix to append if the string is truncated, default is '...'
 * @returns {string} The truncated string, or the original string if it is shorter than maxLen
 */
export function truncateStr(str: string, maxLen: number, suffix = '...'): string {
    let result = ''
    str.length > maxLen ? result = str.substr(0, maxLen - suffix.length) + suffix : result = str;
    return result
}

/**
 * @description Converts a string from camelCase to kebab-case.
 * @param str {string} The string to convert from camelCase to kebab-case
 * @returns {string} The converted string in kebab-case
 */
export function camelToKebab(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * @description Converts a string from kebab-case to camelCase.
 * @param str {string} The string to convert from kebab-case to camelCase
 * @returns {string} The converted string in camelCase
 */
export function kebabToCamel(str: string): string {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * @description Escapes HTML characters in a string to prevent XSS attacks.
 * @param str {string} The string to escape HTML characters
 */
export function escapeHTML(str: string): string {
    return str.replace(/[&<>"']/g,
        // @ts-ignore
        ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

/**
 * @description Unescapes HTML characters in a string.
 * @param str {string} The string to unescape HTML characters
 * @returns {string} The unescaped string
 */
export function unescapeHTML(str: string): string {
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,
        // @ts-ignore
        tag => ({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'"
        }[tag]));
}

/**
 * @description Validates if a given string is a valid URL.
 * @param url {string} The URL to validate
 * @returns {boolean} True if the URL is valid, false otherwise
 */
export function isValieUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * @description Capitalizes the first character of a string.
 * @param str {string} The string to capitalize
 * @returns {string} The string with the first character capitalized
 */
export function capitalizeStr(str: string): string {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @description Counts the occurrences of a specific character in a string.
 * @param str {string} The string to count occurrences in
 * @param char {string} The character to count occurrences of
 * @returns {number} The number of occurrences of the character in the string
 */
export function countOccurrences(str: string, char: string): number {
    return str.split(char).length - 1;
}

/**
 * @description Encodes a string in base64 format.
 * @param str {string} The string to encode in base64
 * @returns {string} The base64 encoded string
 */
export function encodebase64(str: string): string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
        String.fromCharCode(('0x' + p1) as any)));
}

/**
 * @description Decodes a base64 encoded string.
 * @param str {string} The base64 encoded string to decode
 * @returns {string} The decoded string
 */
export function decodebase64(str: string): string {
    return decodeURIComponent(atob(str).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
}

/**
 * @description Generates a random string of a specified length using specified characters.
 * @param length {number} The length of the random string to generate, default is 10
 * @param chars {string} The characters to use for generating the random string, default is alphanumeric characters
 * @returns {string} A random string of the specified length using the specified characters
 */
export function generateRandomString(length: number = 10, chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}