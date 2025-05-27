/**
 * @description This function checks if the current environment is a React environment.
 * @returns Boolean
 */
export function isReactEnv() {
    return typeof window !== 'undefined' && window.React !== undefined;
}
/**
 * @description This function checks if the current environment is a Vue environment.
 * @returns Boolean
 */
export function isVueEnv() {
    return typeof window !== 'undefined' && window.Vue !== undefined;
}
/**
 * @description This function checks if the current environment is an Angular environment.
 * @returns Boolean
 */
export function isAngularEnv() {
    return typeof window !== 'undefined' && window.ng !== undefined;
}
/**
 * @description This function checks if the current environment is a Svelte environment.
 * @returns Boolean
 */
export function isSvelteEnv() {
    return typeof window !== 'undefined' && window.Svelte !== undefined;
}
/**
 * @description This function checks if the current environment is a Preact environment.
 * @returns Boolean
 */
export function isPreactEnv() {
    return typeof window !== 'undefined' && window.Preact !== undefined;
}
/**
 * @description This function checks if the current environment is a Solid environment.
 * @returns {boolean}
 */
export function isSolidEnv() {
    return typeof window !== 'undefined' && window.Solid !== undefined;
}
/**
 * @description This function checks if the current environment is a Node.js environment.
 * @returns {boolean}
 */
export function isNodeEnv() {
    return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
}
/**
 * @deascription This function checks if the current browser is mobile.
 * @returns {boolean}
 */
export function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
/**
 * @description This function checks the current browser name.
 * @returns {string} The current browser name.
 */
export function curBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    }
    else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
    else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        return "Opera";
    }
    else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        return "Internet Explorer";
    }
    return "Unknown";
}
/**
 * @description This function checks if a global variable exists in the current environment.
 * @param variable {string | number} The name of the global variable to check.
 * @returns {boolean} Returns true if the global variable exists, false otherwise.
 */
export function hasGlobalVariable(variable) {
    return typeof window[variable] !== 'undefined';
}
