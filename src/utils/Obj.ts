const { isObject } = require('./is.js');

type ObjType = Record<string | number, any>;
/**
 * 
 * @param {object} target 
 * @returns {object}
 */
export function objDeepClone<t>(target: ObjType | Array<t>): ObjType | Array<t> {
    if (target === null || typeof target !== 'object') {
        return target;
    }

    if (typeof target !== "object" || target === null) return target;
    const clone: ObjType | Array<t> = Array.isArray(target) ? [] : {};
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            clone[key] = objDeepClone(target[key]);
        }
    }
    return clone;
}

/**
 * @description Shallow clones an object or array.
 * @param {object} target 
 * @returns {object}
 */
export function objShallowClone<T>(target: object | Array<T>): object | Array<T> {
    if (target === null || typeof target !== 'object') {
        return target;
    }
    return Array.isArray(target) ? [...target] : { ...target };
}

/**
 * @description Checks if two objects are deeply equal.
 * @param obj1 {ObjType}
 * @param obj2 {ObjType}
 * @returns {boolean}
 */
export function isEqual(obj1: ObjType, obj2: ObjType): boolean {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

/**
 * @description Inherits the prototype of a parent class in a child class.
 * @param child {any}
 * @param parent {any}
 */
export function objInheritPrototype(child: any, parent: any) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

/**
 * @description Checks if an object is empty.
 * @param obj {object}
 * @returns {boolean}
 */
export function isEmptyObject(obj: object): boolean {
    return obj.constructor === Object && Object.keys(obj).length === 0;
}

/**
 * @description Picks specific keys from an object.
 * @param obj {ObjType}
 * @param keys {Array<string | number>}
 * @returns {Record<string, any>}
 */
export function objPick(obj: ObjType, keys: Array<string | number>): Record<string, any> {
    if (!isObject(obj)) return {};
    if (!Array.isArray(keys)) throw new TypeError('keys must be an array');
    return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key)) acc[key] = obj[key];
        return acc;
    }, {} as Record<string, any>);
}

/**
 * @description Omits specific keys from an object.
 * @param obj {ObjType}
 * @param keys {Array<string | number>}
 * @returns {Record<string, any>}
 */
export function objOmit(obj: ObjType, keys: Array<string | number>): Record<string, any> {
    if (!isObject(obj)) return {};
    if (!Array.isArray(keys)) throw new TypeError('keys must be an array');
    return Object.keys(obj).reduce((acc, key) => {
        if (!keys.includes(key)) acc[key] = obj[key];
        return acc;
    }, {} as Record<string, any>);
}

/**
 * @description Converts an object to a query string.
 * @param obj {object}
 * @returns {string}
 */
export function objToQueryString(obj: object): string {
    if (!isObject(obj)) return '';
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key as string)}=${encodeURIComponent(value as string)}`)
        .join('&');
}

/**
 * @description Converts an object to a Map.
 * @param obj {ObjType}
 * @returns 
 */
export function objectToMap(obj: ObjType): Map<string, any> {
    if (!isObject(obj)) return new Map();
    const map = new Map<string, any>();
    Object.entries(obj).forEach(([key, value]) => {
        map.set(key, value);
    });
    return map;
}

/**
 * @description Merges multiple objects into one.
 * @param objects {T[]}
 * @returns 
 */
export function mergeObjects<T extends ObjType>(...objects: T[]): T {
    return objects.reduce((acc, obj) => {
        if (isObject(obj)) {
            Object.keys(obj).forEach(key => {
                //@ts-ignore
                acc[key] = obj[key];
            });
        }
        return acc;
    }, {} as T);
}

/**
 * @description Freezes an object and its nested objects to prevent further modifications.
 * @param obj {T}
 * @returns 
 */
export function freezeObject<T extends ObjType>(obj: T): Readonly<T> {
    if (!isObject(obj)) return obj as Readonly<T>;
    Object.keys(obj).forEach(key => {
        if (isObject(obj[key])) {
            freezeObject(obj[key]);
        }
    });
    return Object.freeze(obj) as Readonly<T>;
}

/**
 * @description Freezes an object shallowly, preventing modifications to the top-level properties but allowing nested objects to be modified.
 * @param obj {T}
 * @returns 
 */
export function freezeObjectShallow<T extends ObjType>(obj: T): Readonly<T> {
    if (!isObject(obj)) return obj as Readonly<T>;
    return Object.freeze({ ...obj }) as Readonly<T>;
}

/**
 * @description Freezes specific keys of an object, preventing modifications to those keys while allowing others to be modified.
 * @param obj {T}
 * @param keys {Array<string | number>}
 * @returns 
 */
export function freezeObjectPickKeys<T extends ObjType>(obj: T, keys: Array<string | number>): void{
    if (!isObject(obj)) void 0;
    Object.keys(obj).forEach(key => {
        if (keys.includes(key)) {
            Object.defineProperty(obj, key, {
                value: obj[key],
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    })
}