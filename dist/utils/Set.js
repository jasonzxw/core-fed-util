/**
 * @description Set utility functions for array operations
 * @param args - Multiple arrays to union
 * @returns
 */
export function uninonSet(...args) {
    const set = new Set();
    args.forEach(arr => arr.forEach(item => set.add(item)));
    return Array.from(set);
}
/**
 * @description Set utility function to find intersection of multiple arrays
 * @param args - Multiple arrays to find intersection
 * @returns
 */
export function intersectionSet(...args) {
    if (args.length === 0)
        return [];
    const [first, ...rest] = args;
    const set = new Set(first);
    rest.forEach(arr => {
        arr.forEach(item => {
            if (!set.has(item)) {
                set.delete(item);
            }
        });
    });
    return Array.from(set);
}
/**
 * @description Set utility function to find the difference between two arrays
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export function differenceSet(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => !set2.has(item));
}
/**
 * @description Set utility function to find the symmetric difference between two arrays
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export function symmetricDifferenceSet(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const difference1 = arr1.filter(item => !set2.has(item));
    const difference2 = arr2.filter(item => !set1.has(item));
    return [...difference1, ...difference2];
}
/**
 * @description Check if one array is a subset of another
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export function isSubset(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.every(item => set2.has(item));
}
/**
 * @description Check if one array is a superset of another
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export function isSuperset(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.every(item => set1.has(item));
}
/**
 * @description Map a Set to an array using a callback function
 * @param arr {Set<T>}
 * @param callback {(item: T) => U}
 * @returns
 */
export function mapSet(arr, callback) {
    return Array.from(arr, callback);
}
