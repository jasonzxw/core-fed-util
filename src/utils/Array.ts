/**
 * @description Generates an array of numbers starting from a given number.
 * @param {number} n 
 * @param {number} start 
 * @returns {Array<number>}
 */
export function generateArrayNumbers(n: number, start = 1): Array<number> {
    return Array.from({ length: n }, (_, i) => start + i);
}

/**
 * @description Flattens a nested array up to a specified depth.
 * @param {Array} arr 
 * @param {number} depth 
 * @returns {Array}
 */
export function flattenArray<T>(arr: Array<T>, depth = 1): any {
    return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val, depth - 1) : val), []) : arr.slice();
}

/**
 * @description Removes duplicates from an array.
 * @param {Array} arr 
 * @param {number} value 
 * @returns {Array}
 */
export function removeArrayDuplicates<T>(arr: Array<T>, value: T): Array<T> {
    return arr.filter(item => item !== value);
}

/**
 * @description Finds all the index of the first occurrence of a value in an array.
 * @param {Array} arr 
 * @param {value} value 
 * @returns {Array}
 */
export function findAllIndexes<T>(arr: Array<T>, value: T): Array<number> {
    return arr.reduce((acc, item, index) => {
        if (item === value) (acc as Array<number>).push(index);
        return acc;
    }, []);
}

/**
 * @description Checks if an array is empty.
 * @param {Array} arr 
 * @returns {boolean}
 */
export function isEmptyArray<T>(arr: Array<T>): boolean {
    return Array.isArray(arr) && arr.length === 0;
}

/**
 * @description sorts an array in ascending order.
 * @param {Array} arr 
 * @returns {Array}
 */
export function sortArrayAscending(arr: Array<number>): Array<number> {
    return arr.slice().sort((a, b) => a - b);
}

/**
 * @description sorts an array in descending order.
 * @param {Array} arr 
 * @returns {Array}
 */
export function sortArrayDescending(arr: Array<number>): Array<number> {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * @description bubble sort algorithm implementation.
 * @param {Array} arr 
 * @returns {Array}
 */
export function bubbleArraySort(arr: Array<number>): Array<number> {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/**
 * @description Removes all duplicate values from an array, returning a new array with unique values.
 * @param {Array} arr 
 * @returns {Array}
 */
export function uniqueArray<T>(arr: Array<T>): Array<T> {
    return Array.from(new Set(arr));
}

/**
 * @description Removes all occurrences of specified values from an array.
 * @param arr {Array<T>}
 * @param values {Array<T>}
 * @returns {Array<T>}
 */
export function omitArrayValues<T>(arr: Array<T>, values: Array<T>): Array<T> {
    const valueSet = new Set(values);
    return arr.filter(item => !valueSet.has(item));
}

/**
 * @description Converts an array of key-value pairs into a Map.
 * @param array {Array<[string, any]>}
 * @returns 
 */
export function arrayToMap(array:Array<[string,any]>): Map<string, any> {
    return new Map(array);
}

/**
 * @description Merges multiple arrays into a single array.
 * @param arrays {Array<Array<T>>}
 * @returns 
 */
export function mergeArrays<T>(...arrays: Array<Array<T>>): Array<T> {
    const mergedArray: Array<T> = [];
    arrays.forEach(array => {
        if (Array.isArray(array)) {
            mergedArray.push(...array);
        }
    });
    return mergedArray;
}

