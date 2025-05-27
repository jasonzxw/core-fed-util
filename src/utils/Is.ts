/**
 * @dedscription This module provides utility functions to check the type of a value.
 * @param value 
 * @param type 
 * @returns {boolean}
 */
export function isType(value: unknown, type: string): boolean {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
}
/**
 * @description This function checks if the value is a Number.
 * @param value 
 * @returns {boolean}
 */
export function isNumber(value: unknown): boolean {
    return isType(value, 'Number');
}

/**
 * @description This function checks if the value is a String.
 * @param value 
 * @returns {boolean}
 */
export function isString(value: unknown): boolean {
    return isType(value, 'String');
}

/**
 * @description This function checks if the value is an array.
 * @param value 
 * @returns {boolean}
 */
export function isArray(value: unknown): boolean {
    return isType(value, 'Array');
}

/**
 * @description This function checks if the value is an object (not an array).
 * @param value 
 * @returns {boolean}
 */
export function isObject(value: unknown): boolean {
    return isType(value, 'Object') && Array.isArray(value) === false;
}

/**
 * @description This function checks if the value is a function.
 * @param value 
 * @returns {boolean}
 */
export function isFunction(value: unknown): boolean {
    return isType(value, 'Function');
}

/**
 * @description This function checks if the value is a boolean.
 * @param value 
 * @returns {boolean}
 */
export function isBoolean(value: unknown): boolean {
    return isType(value, 'Boolean');
}

/**
 * @description This function checks if the value is null.
 * @param value 
 * @returns {boolean}
 */
export function isNull(value: unknown): boolean {
    return value === null;
}

/**
 * @description This function checks if the value is undefined.
 * @param value 
 * @returns {boolean}
 */
export function isUndefined(value: unknown): boolean {
    return value === undefined;
}

/**
 * @description This function checks if the value is a Date object.
 * @param value 
 * @returns {boolean}
 */
export function isDate(value: unknown): boolean {
    return isType(value, 'Date');
}

/**
 * @description This function checks if the value is a RegExp.
 * @param value 
 * @returns {boolean}
 */
export function isRegExp(value: unknown): boolean {
    return isType(value, 'RegExp');
}

/**
 * @description This function checks if the value is a Symbol.
 * @param value 
 * @returns {boolean}
 */
export function isSymbol(value: unknown): boolean {
    return isType(value, 'Symbol');
}

/**
 * @description This function checks if the value is a BigInt.
 * @param value 
 * @returns {boolean}
 */
export function isBigInt(value: unknown): boolean {
    return isType(value, 'BigInt');
}

/**
 * @description This function checks if the value is an Error object.
 * @param value 
 * @returns {boolean}
 */
export function isError(value: unknown): boolean {
    return isType(value, 'Error');
}

/**
 * @description This function checks if the value is a DateTime object.
 * @param value 
 * @returns {boolean}
 */
export function isDateTime(value: unknown): boolean {
    return isType(value, 'Date') || isType(value, 'DateTime');
}

/**
 * @description This function checks if the value is a Map.
 * @param value 
 * @returns {boolean}
 */
export function isMap(value: unknown): boolean {
    return isType(value, 'Map');
}

/**
 * @description This function checks if the value is a Set.
 * @param value 
 * @returns {boolean}
 */
export function isSet(value: unknown): boolean {
    return isType(value, 'Set');
}

/**
 * @description This function checks if the value is a WeakMap.
 * @param value 
 * @returns {boolean}
 */
export function isWeakMap(value: unknown): boolean {
    return isType(value, 'WeakMap');
}

/**
 * @description This function checks if the value is a WeakSet.
 * @param value 
 * @returns {boolean}
 */
export function isWeakSet(value: unknown): boolean {
    return isType(value, 'WeakSet');
}

/**
 * @description This function checks if the value is a Promise.
 * @param value 
 * @returns {boolean}
 */
export function isPromise(value: unknown): boolean {
    return isType(value, 'Promise') && isFunction((value as Promise<unknown>).then);
}