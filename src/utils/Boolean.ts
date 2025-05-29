/**
 * @description Checks if all provided arguments are truthy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if all arguments are truthy, otherwise false
 */
export function checkAllTrue(...args: Array<any>):boolean{
    return args.every(arg => Boolean(arg));
}

/**
 * @description Checks if any of the provided arguments are truthy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if any argument is truthy, otherwise false
 */
export function checkAnyTrue(...args: Array<any>):boolean{
    return args.some(arg => Boolean(arg));
}

/**
 * @description Checks if all provided arguments are falsy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if all arguments are falsy, otherwise false
 */
export function checkAllFalse(...args: Array<any>):boolean{
    return args.every(arg => !Boolean(arg));
}

/**
 * @description Checks if any of the provided arguments are falsy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if any argument is falsy, otherwise false
 */
export function checkAnyFalse(...args: Array<any>):boolean{
    return args.some(arg => !Boolean(arg));
}

/**
 * @description Returns a class name if the condition is true, otherwise returns an empty string.
 * @param condition {boolean} The condition to check
 * @param className {string} The class name to return if the condition is true
 * @returns {string} The class name or an empty string
 */
export function classIf(condition: any, className: string): string {
    return !!condition ? className : '';
}

/**
 * @description Filters an object to only include properties with truthy values.
 * @param obj {Record<string, any>} The object to filter
 * @returns {Record<string, any>} A new object containing only the properties with truthy values
 */
export function filterTruthyProps(obj: Record<string, any>): Record<string, any> {
    return Object.
    fromEntries(Object.entries(obj).filter(([_, value]) => Boolean(value)));
}

/**
 * @description Converts a value to a boolean.
 * @param value The value to convert to a boolean
 * @returns {boolean} Returns true if the value is truthy, false otherwise.
 */
export function toBoolean(value: any): boolean {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'number') {
        return value !== 0;
    }
    if (typeof value === 'string') {
        return value.toLowerCase() === 'true' || value !== '';
    }
    return Boolean(value);
}

/**
 * @description Checks if a value is truthy.
 * @param value The value to check
 * @returns {boolean} Returns true if the value is truthy, false otherwise.
 */
export function isTrue(value: any): boolean {
    return toBoolean(value) === true;
}

/**
 * @description Checks if a value is falsy.
 * @param value 
 * @returns {boolean} Returns true if the value is falsy, false otherwise.
 */
export function isFalse(value: any): boolean {
    return toBoolean(value) === false;
}