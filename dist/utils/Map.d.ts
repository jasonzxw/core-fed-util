/**
 * @description Utility function to safely get a value from a Map
 * @param map {K: V}
 * @param key {K}
 * @param defaultVal{V | undefined}
 * @returns
 */
export declare function safeGetMapValue<K, V>(map: Map<K, V>, key: K, defaultVal: V | undefined): V | undefined;
/**
 * @description Utility function to convert an object to a Map
 * @param map {Map<string, any>}
 * @returns
 */
export declare function mapToObject(map: Map<string, any>): Record<string, any>;
/**
 * @description Utility function to convert a Map to an array of key-value pairs
 * @param map {Map<K, V>}
 * @returns
 */
export declare function mapToArray<K, V>(map: Map<K, V>): [K, V][];
/**
 * @description Utility function to check if two Maps are equal
 * @param map1 {Map<K, V>}
 * @param map2 {Map<K, V>}
 * @returns
 */
export declare function areMapsEqual<K, V>(map1: Map<K, V>, map2: Map<K, V>): boolean;
/**
 * @description Utility function to merge multiple Maps into one
 * @param maps {Map<K, V>[]}
 * @returns
 */
export declare function mergeMaps<K, V>(...maps: Map<K, V>[]): Map<K, V>;
//# sourceMappingURL=Map.d.ts.map