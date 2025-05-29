/**
 * @description Checks if all provided arguments are truthy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if all arguments are truthy, otherwise false
 */
export declare function checkAllTrue(...args: Array<any>): boolean;
/**
 * @description Checks if any of the provided arguments are truthy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if any argument is truthy, otherwise false
 */
export declare function checkAnyTrue(...args: Array<any>): boolean;
/**
 * @description Checks if all provided arguments are falsy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if all arguments are falsy, otherwise false
 */
export declare function checkAllFalse(...args: Array<any>): boolean;
/**
 * @description Checks if any of the provided arguments are falsy.
 * @param args {Array<any>} An array of arguments to check
 * @returns {boolean} Returns true if any argument is falsy, otherwise false
 */
export declare function checkAnyFalse(...args: Array<any>): boolean;
/**
 * @description Returns a class name if the condition is true, otherwise returns an empty string.
 * @param condition {boolean} The condition to check
 * @param className {string} The class name to return if the condition is true
 * @returns {string} The class name or an empty string
 */
export declare function classIf(condition: any, className: string): string;
/**
 * @description Filters an object to only include properties with truthy values.
 * @param obj {Record<string, any>} The object to filter
 * @returns {Record<string, any>} A new object containing only the properties with truthy values
 */
export declare function filterTruthyProps(obj: Record<string, any>): Record<string, any>;
/**
 * @description Converts a value to a boolean.
 * @param value The value to convert to a boolean
 * @returns {boolean} Returns true if the value is truthy, false otherwise.
 */
export declare function toBoolean(value: any): boolean;
/**
 * @description Checks if a value is truthy.
 * @param value The value to check
 * @returns {boolean} Returns true if the value is truthy, false otherwise.
 */
export declare function isTrue(value: any): boolean;
/**
 * @description Checks if a value is falsy.
 * @param value
 * @returns {boolean} Returns true if the value is falsy, false otherwise.
 */
export declare function isFalse(value: any): boolean;
//# sourceMappingURL=Boolean.d.ts.map