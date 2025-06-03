type ObjType = Record<string | number, any>;
/**
 *
 * @param {object} target
 * @returns {object}
 */
export declare function objDeepClone<t>(target: ObjType | Array<t>): ObjType | Array<t>;
/**
 * @description Shallow clones an object or array.
 * @param {object} target
 * @returns {object}
 */
export declare function objShallowClone<T>(target: object | Array<T>): object | Array<T>;
/**
 * @description Checks if two objects are deeply equal.
 * @param obj1 {ObjType}
 * @param obj2 {ObjType}
 * @returns {boolean}
 */
export declare function isEqual(obj1: ObjType, obj2: ObjType): boolean;
/**
 * @description Inherits the prototype of a parent class in a child class.
 * @param child {any}
 * @param parent {any}
 */
export declare function objInheritPrototype(child: any, parent: any): void;
/**
 * @description Checks if an object is empty.
 * @param obj {object}
 * @returns {boolean}
 */
export declare function isEmptyObject(obj: object): boolean;
/**
 * @description Omits specific keys from an object.
 * @param obj {ObjType}
 * @param keys {Array<string | number>}
 * @returns {Record<string, any>}
 */
export declare function objOmit(obj: ObjType, keys: Array<string | number>): Record<string, any>;
/**
 * @description Converts an object to a query string.
 * @param obj {object}
 * @returns {string}
 */
export declare function objToQueryString(obj: object): string;
/**
 * @description Converts an object to a Map.
 * @param obj {ObjType}
 * @returns
 */
export declare function objectToMap(obj: ObjType): Map<string, any>;
/**
 * @description Merges multiple objects into one.
 * @param objects {T[]}
 * @returns
 */
export declare function mergeObjects<T extends ObjType>(...objects: T[]): T;
export {};
//# sourceMappingURL=Obj.d.ts.map