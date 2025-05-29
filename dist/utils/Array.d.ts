/**
 * @description Generates an array of numbers starting from a given number.
 * @param {number} n
 * @param {number} start
 * @returns {Array<number>}
 */
export declare function generateArrayNumbers(n: number, start?: number): Array<number>;
/**
 * @description Flattens a nested array up to a specified depth.
 * @param {Array} arr
 * @param {number} depth
 * @returns {Array}
 */
export declare function flattenArray<T>(arr: Array<T>, depth?: number): any;
/**
 * @description Removes duplicates from an array.
 * @param {Array} arr
 * @param {number} value
 * @returns {Array}
 */
export declare function removeArrayDuplicates<T>(arr: Array<T>, value: T): Array<T>;
/**
 * @description Finds all the index of the first occurrence of a value in an array.
 * @param {Array} arr
 * @param {value} value
 * @returns {Array}
 */
export declare function findAllIndexes<T>(arr: Array<T>, value: T): Array<number>;
/**
 * @description Checks if an array is empty.
 * @param {Array} arr
 * @returns {boolean}
 */
export declare function isEmptyArray<T>(arr: Array<T>): boolean;
/**
 * @description sorts an array in ascending order.
 * @param {Array} arr
 * @returns {Array}
 */
export declare function sortArrayAscending(arr: Array<number>): Array<number>;
/**
 * @description sorts an array in descending order.
 * @param {Array} arr
 * @returns {Array}
 */
export declare function sortArrayDescending(arr: Array<number>): Array<number>;
/**
 * @description bubble sort algorithm implementation.
 * @param {Array} arr
 * @returns {Array}
 */
export declare function bubbleArraySort(arr: Array<number>): Array<number>;
/**
 * @description Removes all duplicate values from an array, returning a new array with unique values.
 * @param {Array} arr
 * @returns {Array}
 */
export declare function uniqueArray<T>(arr: Array<T>): Array<T>;
/**
 * @description Removes all occurrences of specified values from an array.
 * @param arr {Array<T>}
 * @param values {Array<T>}
 * @returns {Array<T>}
 */
export declare function omitArrayValues<T>(arr: Array<T>, values: Array<T>): Array<T>;
//# sourceMappingURL=Array.d.ts.map