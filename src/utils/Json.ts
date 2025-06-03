/**
 * @description Flattens a nested JSON object into a single-level object with dot notation for nested keys.
 * @param obj {[key: string]: any}
 * @param prefix {string}
 * @param result {[key: string]: any}
 * @returns 
 */
export function flattenJsonObject(
    obj: Record<string, any>,
    prefix = '',
    result: Record<string, any> = {}
): Record<string, any> {
    for (const key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenJsonObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

/**
 * @description Unflattens a flattened JSON object back into a nested structure based on dot notation keys.
 * @param obj {[key: string]: any}
 * @param separator {string}
 * @returns 
 */
export function unFlattenJsonObject(
    obj: Record<string, any>,
    separator = '.'
): Record<string, any> {
    const result: Record<string, any> = {};
    for (const key in obj) {
        const keys = key.split(separator);
        keys.reduce((acc, part, index) => {
            if (index === keys.length - 1) {
                acc[part] = obj[key];
            } else {
                acc[part] = acc[part] || {};
            }
            return acc[part];
        }, result);
    }
    return result;
}

/**
 * @description Compares two JSON objects and returns the differences between them.
 * @param obj1 {[key: string]: any}
 * @param obj2 {[key: string]: any}
 * @returns {[key: string]: { oldValue: any, newValue: any }}
 */
export function getJsonObjectDiff(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    const diff: Record<string, any> = {};
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    keys.forEach(key => {
        if (obj1[key] !== obj2[key]) {
            diff[key] = { oldValue: obj1[key], newValue: obj2[key] };
        }
    });
    return diff;
}

/**
 * @description Renames keys in a JSON object based on a provided mapping.
 * @param obj {[key: string]: any}
 * @param renameMap {[key: string]: string}
 * @returns 
 */
export function renameJsonObject(
    obj: Record<string, any>,
    renameMap: Record<string, string>
): Record<string, any> {
    const renamedObj: Record<string, any> = {};
    for (const key in obj) {
        const newKey = renameMap[key] || key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            renamedObj[newKey] = renameJsonObject(obj[key], renameMap);
        } else {
            renamedObj[newKey] = obj[key];
        }
    }
    return renamedObj;
}

/**
 * @description Converts a JSON object to a query string format, suitable for URL parameters.
 * @param obj {[key: string]: any}
 * @param prefix {string}
 * @returns 
 */
export function jsonToQueryString(obj: Record<string, any>, prefix = ''): string {
    const parts: string[] = [];
    for (const key in obj) {
        const value = obj[key];
        const encodedKey = prefix ? `${prefix}[${encodeURIComponent(key)}]` : encodeURIComponent(key);
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            parts.push(jsonToQueryString(value, encodedKey));
        } else {
            parts.push(`${encodedKey}=${encodeURIComponent(value)}`);
        }
    }
    return parts.join('&');
}