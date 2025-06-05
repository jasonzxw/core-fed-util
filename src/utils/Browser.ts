/**
 * @description This module provides utility functions for manipulating URL parameters in the browser.
 * @param name {string} The name of the URL parameter to retrieve.
 * @returns 
 */
export function getUrlParam(name: string): string | null {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

/**
 * @description This function checks if a URL parameter exists in the current URL.
 * @param name {string} The name of the URL parameter to check.
 * @returns 
 */
export function hasUrlParam(name: string): boolean {
    const url = new URL(window.location.href);
    return url.searchParams.has(name);
}
/**
 * @description This function sets a URL parameter in the current URL.
 * @param name {string} The name of the URL parameter to set.
 * @param value {string} The value to set for the URL parameter.
 */
export function setUrlParam(name: string, value: string): void {
    const url = new URL(window.location.href);
    url.searchParams.set(name, value);
    window.history.pushState({}, '', url.toString());
}

/**
 * @description This function removes a URL parameter from the current URL.
 * @param name {string} The name of the URL parameter to remove.
 */
export function removeUrlParam(name: string): void {
    const url = new URL(window.location.href);
    url.searchParams.delete(name);
    window.history.pushState({}, '', url.toString());
}

/**
 * @description This function retrieves all URL parameters from the current URL as an object.
 * @param {string} The name of the URL parameter to retrieve.
 */
export function getAllUrlParams(): Record<string, string> {
    const url = new URL(window.location.href);
    const params: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

/**
 * @description This function retrieves the current URL information.
 * @returns {Object} An object containing the current URL information.
 */
export function getCurrentUrlInfo(): {
    href: string;
    protocol: string;
    host: string;
    hostname: string;
    pathname: string;
    search: string;
    hash: string;
} {
    const url = new URL(window.location.href);
    return {
        href: url.href,
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
    };
}

/**
 * @description Detects the type of device based on the user agent string.
 * @returns {string} The current browser's user agent string.
 */
export function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) {
        return 'mobile';
    } else if (/tablet|ipad/.test(userAgent)) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

/**
 * @description Detects the type of browser based on the user agent string.
 * @returns {string} The current browser's user agent string.
 */
export function getBrowserType(): 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Opera' | 'Unknown' {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {
        return 'Chrome';
    } else if (userAgent.includes('Firefox')) {
        return 'Firefox';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        return 'Safari';
    } else if (userAgent.includes('Edge')) {
        return 'Edge';
    } else if (userAgent.includes('Opera') || userAgent.includes('OPR/')) {
        return 'Opera';
    } else {
        return 'Unknown';
    }
}

/**
 * @description This class provides static method to manage localstorage.
 */
export class StorageOperator {
    static setKey(key: string, value: object, expireHours: number = 24) {
        const now = new Date();
        const expireTime = new Date(now.getTime() + expireHours * 60 * 60 * 1000);
        const data = {
            ...value,
            expire: expireTime.toISOString()
        };
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getKey(key: string): object | null {
        const item = localStorage.getItem(key);
        if (!item) return null;

        const data = JSON.parse(item);
        const expireTime = new Date(data.expire);
        const now = new Date();

        if (now > expireTime) {
            localStorage.removeItem(key);
            return null;
        }

        return data;
    }

    static removeKey(key: string): void {
        localStorage.removeItem(key);
    }
}