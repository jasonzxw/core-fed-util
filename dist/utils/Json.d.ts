/**
 * @description Flattens a nested JSON object into a single-level object with dot notation for nested keys.
 * @param obj {[key: string]: any}
 * @param prefix {string}
 * @param result {[key: string]: any}
 * @returns
 */
export declare function flattenJsonObject(obj: Record<string, any>, prefix?: string, result?: Record<string, any>): Record<string, any>;
/**
 * @description Unflattens a flattened JSON object back into a nested structure based on dot notation keys.
 * @param obj {[key: string]: any}
 * @param separator {string}
 * @returns
 */
export declare function unFlattenJsonObject(obj: Record<string, any>, separator?: string): Record<string, any>;
/**
 * @description Compares two JSON objects and returns the differences between them.
 * @param obj1 {[key: string]: any}
 * @param obj2 {[key: string]: any}
 * @returns {[key: string]: { oldValue: any, newValue: any }}
 */
export declare function getJsonObjectDiff(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any>;
/**
 * @description Renames keys in a JSON object based on a provided mapping.
 * @param obj {[key: string]: any}
 * @param renameMap {[key: string]: string}
 * @returns
 */
export declare function renameJsonObject(obj: Record<string, any>, renameMap: Record<string, string>): Record<string, any>;
/**
 * @description Converts a JSON object to a query string format, suitable for URL parameters.
 * @param obj {[key: string]: any}
 * @param prefix {string}
 * @returns
 */
export declare function jsonToQueryString(obj: Record<string, any>, prefix?: string): string;
//# sourceMappingURL=Json.d.ts.map