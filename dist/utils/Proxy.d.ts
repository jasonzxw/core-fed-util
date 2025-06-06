interface Validator {
    [index: string]: (value: any) => boolean;
}
/**
 * @description Creates a proxy for an object that validates property assignments.
 * @param target {object} target
 * @param validator {Validator} validator
 * @returns
 */
export declare function createValidatorProxy<T extends object>(target: T, validator: Validator): T;
/**
 * @description Creates a read-only proxy for an object.
 * @param target {object} target
 * @returns
 */
export declare function createReadonlyProxy<T extends object>(target: T): T;
/**
 * @description Creates an observable proxy for an object that notifies changes.
 * @param target {object} target
 * @param onChange {(prop: string | symbol, value: any) => void} onChange
 * @returns
 */
export declare function createObservableProxy<T extends object>(target: T, onChange: (prop: string | symbol, value: any) => void): T;
/**
 * @description Creates a proxy for a function that executes a callback before or after the function call.
 * @param target {Function} target
 * @param callFn {(prop: string | symbol, args: any[]) => void} callFn
 * @param before {boolean} before - If true, callFn is executed before the function call; if false, after.
 * @returns
 */
export declare function createCallFnAspectProxy(target: Function, callFn: (prop: string | symbol, args: any[]) => void, before?: boolean): Function;
/**
 * @description Creates a proxy for an object that restricts access to certain properties, treating them as private.
 * @param target {object} target
 * @param privateProps {Array<string | symbol>} privateProps - Array of property names or symbols that should be treated as private.
 * @returns
 */
export declare function withPrivatePropsProxy<T extends object>(target: T, privateProps: Array<string | symbol>): T;
export {};
//# sourceMappingURL=Proxy.d.ts.map