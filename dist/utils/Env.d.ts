declare global {
    interface Window {
        React?: unknown;
        ReactDOM?: unknown;
        Vue?: unknown;
        __VUE__?: unknown;
        ng?: unknown;
        Svelte?: unknown;
        Preact?: unknown;
        Solid?: unknown;
        [key: string]: any;
    }
}
/**
 * @description This function checks if the current environment is a React environment.
 * @returns Boolean
 */
export declare function isReactEnv(): boolean;
/**
 * @description This function checks if the current environment is a Vue environment.
 * @returns Boolean
 */
export declare function isVueEnv(): boolean;
/**
 * @description This function checks if the current environment is an Angular environment.
 * @returns Boolean
 */
export declare function isAngularEnv(): boolean;
/**
 * @description This function checks if the current environment is a Svelte environment.
 * @returns Boolean
 */
export declare function isSvelteEnv(): boolean;
/**
 * @description This function checks if the current environment is a Preact environment.
 * @returns Boolean
 */
export declare function isPreactEnv(): boolean;
/**
 * @description This function checks if the current environment is a Solid environment.
 * @returns {boolean}
 */
export declare function isSolidEnv(): boolean;
/**
 * @description This function checks if the current environment is a Node.js environment.
 * @returns {boolean}
 */
export declare function isNodeEnv(): boolean;
/**
 * @deascription This function checks if the current browser is mobile.
 * @returns {boolean}
 */
export declare function isMobile(): boolean;
type BrowserName = "Chrome" | "Firefox" | "Safari" | "Opera" | "Internet Explorer" | "Unknown";
/**
 * @description This function checks the current browser name.
 * @returns {string} The current browser name.
 */
export declare function curBrowser(): BrowserName;
/**
 * @description This function checks if a global variable exists in the current environment.
 * @param variable {string | number} The name of the global variable to check.
 * @returns {boolean} Returns true if the global variable exists, false otherwise.
 */
export declare function hasGlobalVariable(variable: string | number): boolean;
export {};
//# sourceMappingURL=Env.d.ts.map