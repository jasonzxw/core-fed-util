/**
 * @description Truncates a string to a specified length and appends a suffix if it exceeds that length.
 * @param str {string} The string to truncate
 * @param maxLen {number} The maximum length of the string
 * @param suffix {string} The suffix to append if the string is truncated, default is '...'
 * @returns {string} The truncated string, or the original string if it is shorter than maxLen
 */
export declare function truncateStr(str: string, maxLen: number, suffix?: string): string;
/**
 * @description Converts a string from camelCase to kebab-case.
 * @param str {string} The string to convert from camelCase to kebab-case
 * @returns {string} The converted string in kebab-case
 */
export declare function camelToKebab(str: string): string;
/**
 * @description Converts a string from kebab-case to camelCase.
 * @param str {string} The string to convert from kebab-case to camelCase
 * @returns {string} The converted string in camelCase
 */
export declare function kebabToCamel(str: string): string;
/**
 * @description Escapes HTML characters in a string to prevent XSS attacks.
 * @param str {string} The string to escape HTML characters
 */
export declare function escapeHTML(str: string): string;
/**
 * @description Unescapes HTML characters in a string.
 * @param str {string} The string to unescape HTML characters
 * @returns {string} The unescaped string
 */
export declare function unescapeHTML(str: string): string;
/**
 * @description Validates if a given string is a valid URL.
 * @param url {string} The URL to validate
 * @returns {boolean} True if the URL is valid, false otherwise
 */
export declare function isValieUrl(url: string): boolean;
/**
 * @description Capitalizes the first character of a string.
 * @param str {string} The string to capitalize
 * @returns {string} The string with the first character capitalized
 */
export declare function capitalizeStr(str: string): string;
/**
 * @description Counts the occurrences of a specific character in a string.
 * @param str {string} The string to count occurrences in
 * @param char {string} The character to count occurrences of
 * @returns {number} The number of occurrences of the character in the string
 */
export declare function countOccurrences(str: string, char: string): number;
/**
 * @description Encodes a string in base64 format.
 * @param str {string} The string to encode in base64
 * @returns {string} The base64 encoded string
 */
export declare function encodebase64(str: string): string;
/**
 * @description Decodes a base64 encoded string.
 * @param str {string} The base64 encoded string to decode
 * @returns {string} The decoded string
 */
export declare function decodebase64(str: string): string;
/**
 * @description Generates a random string of a specified length using specified characters.
 * @param length {number} The length of the random string to generate, default is 10
 * @param chars {string} The characters to use for generating the random string, default is alphanumeric characters
 * @returns {string} A random string of the specified length using the specified characters
 */
export declare function generateRandomString(length?: number, chars?: string): string;
export declare function trimString(str: string): string;
//# sourceMappingURL=String.d.ts.map