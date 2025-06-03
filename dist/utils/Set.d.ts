/**
 * @description Set utility functions for array operations
 * @param args - Multiple arrays to union
 * @returns
 */
export declare function uninonSet<T>(...args: T[][]): T[];
/**
 * @description Set utility function to find intersection of multiple arrays
 * @param args - Multiple arrays to find intersection
 * @returns
 */
export declare function intersectionSet<T>(...args: T[][]): T[];
/**
 * @description Set utility function to find the difference between two arrays
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export declare function differenceSet<T>(arr1: T[], arr2: T[]): T[];
/**
 * @description Set utility function to find the symmetric difference between two arrays
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export declare function symmetricDifferenceSet<T>(arr1: T[], arr2: T[]): T[];
/**
 * @description Check if one array is a subset of another
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export declare function isSubset<T>(arr1: T[], arr2: T[]): boolean;
/**
 * @description Check if one array is a superset of another
 * @param arr1 {T[]}
 * @param arr2 {T[]}
 * @returns
 */
export declare function isSuperset<T>(arr1: T[], arr2: T[]): boolean;
/**
 * @description Map a Set to an array using a callback function
 * @param arr {Set<T>}
 * @param callback {(item: T) => U}
 * @returns
 */
export declare function mapSet<T, U>(arr: Set<T>, callback: (item: T) => U): U[];
//# sourceMappingURL=Set.d.ts.map