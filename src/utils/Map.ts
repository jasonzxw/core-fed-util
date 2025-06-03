/**
 * @description Utility function to safely get a value from a Map
 * @param map {K: V}
 * @param key {K}
 * @param defaultVal{V | undefined} 
 * @returns 
 */
export function safeGetMapValue<K, V>(map: Map<K, V>, key: K , defaultVal: V | undefined): V | undefined {
    return map.has(key) ? map.get(key) : defaultVal;
}

/**
 * @description Utility function to convert an object to a Map
 * @param map {Map<string, any>}
 * @returns 
 */
export function mapToObject(map: Map<string, any>): Record<string, any> {
    const obj: Record<string, any> = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

/**
 * @description Utility function to convert a Map to an array of key-value pairs
 * @param map {Map<K, V>}
 * @returns 
 */
export function mapToArray<K, V>(map: Map<K, V>): [K, V][] {
    return Array.from(map.entries());
}

/**
 * @description Utility function to check if two Maps are equal
 * @param map1 {Map<K, V>}
 * @param map2 {Map<K, V>}
 * @returns 
 */
export function areMapsEqual<K, V>(map1: Map<K, V>, map2: Map<K, V>): boolean {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1.entries()) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

/**
 * @description Utility function to merge multiple Maps into one
 * @param maps {Map<K, V>[]}
 * @returns 
 */
export function mergeMaps<K, V>(...maps: Map<K, V>[]): Map<K, V> {
    const mergedMap = new Map<K, V>();
    maps.forEach(map => {
        map.forEach((value, key) => {
            mergedMap.set(key, value);
        });
    });
    return mergedMap;
}