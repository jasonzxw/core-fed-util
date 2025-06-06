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
 * @description Picks specific keys from an object.
 * @param obj {ObjType}
 * @param keys {Array<string | number>}
 * @returns {Record<string, any>}
 */
export declare function objPick(obj: ObjType, keys: Array<string | number>): Record<string, any>;
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
/**
 * @description Freezes an object and its nested objects to prevent further modifications.
 * @param obj {T}
 * @returns
 */
export declare function freezeObject<T extends ObjType>(obj: T): Readonly<T>;
/**
 * @description Freezes an object shallowly, preventing modifications to the top-level properties but allowing nested objects to be modified.
 * @param obj {T}
 * @returns
 */
export declare function freezeObjectShallow<T extends ObjType>(obj: T): Readonly<T>;
/**
 * @description Freezes specific keys of an object, preventing modifications to those keys while allowing others to be modified.
 * @param obj {T}
 * @param keys {Array<string | number>}
 * @returns
 */
export declare function freezeObjectPickKeys<T extends ObjType>(obj: T, keys: Array<string | number>): void;
export {};
//# sourceMappingURL=Obj.d.ts.map