/**
 * @description This module provides utility functions for manipulating URL parameters in the browser.
 * @param name {string} The name of the URL parameter to retrieve.
 * @returns
 */
export declare function getUrlParam(name: string): string | null;
/**
 * @description This function checks if a URL parameter exists in the current URL.
 * @param name {string} The name of the URL parameter to check.
 * @returns
 */
export declare function hasUrlParam(name: string): boolean;
/**
 * @description This function sets a URL parameter in the current URL.
 * @param name {string} The name of the URL parameter to set.
 * @param value {string} The value to set for the URL parameter.
 */
export declare function setUrlParam(name: string, value: string): void;
/**
 * @description This function removes a URL parameter from the current URL.
 * @param name {string} The name of the URL parameter to remove.
 */
export declare function removeUrlParam(name: string): void;
/**
 * @description This function retrieves all URL parameters from the current URL as an object.
 * @param {string} The name of the URL parameter to retrieve.
 */
export declare function getAllUrlParams(): Record<string, string>;
/**
 * @description This function retrieves the current URL information.
 * @returns {Object} An object containing the current URL information.
 */
export declare function getCurrentUrlInfo(): {
    href: string;
    protocol: string;
    host: string;
    hostname: string;
    pathname: string;
    search: string;
    hash: string;
};
/**
 * @description Detects the type of device based on the user agent string.
 * @returns {string} The current browser's user agent string.
 */
export declare function detectDeviceType(): 'mobile' | 'tablet' | 'desktop';
/**
 * @description Detects the type of browser based on the user agent string.
 * @returns {string} The current browser's user agent string.
 */
export declare function getBrowserType(): 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Opera' | 'Unknown';
/**
 * @description This class provides static method to manage localstorage.
 */
export declare class StorageOperator {
    static setKey(key: string, value: object, expireHours?: number): void;
    static getKey(key: string): object | null;
    static removeKey(key: string): void;
}
//# sourceMappingURL=Browser.d.ts.map