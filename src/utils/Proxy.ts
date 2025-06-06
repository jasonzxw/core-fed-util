interface Validator {
    [index: string]: (value: any) => boolean;
}
/**
 * @description Creates a proxy for an object that validates property assignments.
 * @param target {object} target
 * @param validator {Validator} validator
 * @returns 
 */
export function createValidatorProxy<T extends object>(target: T, validator: Validator): T {
    return new Proxy(target, {
        set(obj, prop, value) {
            if (validator[prop as string] && validator[prop as string](value)) {
                obj[prop as keyof T] = value;
                return true;
            } else {
                throw new TypeError(`Invalid value for property ${String(prop)}: ${value}`);
            }
        },
        get(obj, prop) {
            return obj[prop as keyof T];
        },
        deleteProperty(obj, prop) {
            if (prop in obj) {
                delete obj[prop as keyof T];
                return true;
            }
            return false;
        }
    });
}
/**
 * @description Creates a read-only proxy for an object.
 * @param target {object} target
 * @returns 
 */

export function createReadonlyProxy<T extends object>(target: T): T {
    return new Proxy(target, {
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop as keyof T];
            }
            throw new ReferenceError(`Property ${String(prop)} does not exist on target object.`);
        },
        set() {
            throw new TypeError('Cannot assign to read-only property.');
        },
        deleteProperty() {
            throw new TypeError('Cannot delete property of read-only object.');
        }
    });
}

/**
 * @description Creates an observable proxy for an object that notifies changes.
 * @param target {object} target
 * @param onChange {(prop: string | symbol, value: any) => void} onChange
 * @returns 
 */
export function createObservableProxy<T extends object>(target: T, onChange: (prop: string | symbol, value: any) => void): T {
    return new Proxy(target, {
        set(obj, prop, value) {
            obj[prop as keyof T] = value;
            onChange(prop, value);
            return true;
        },
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop as keyof T];
            }
            throw new ReferenceError(`Property ${String(prop)} does not exist on target object.`);
        },
        deleteProperty(obj, prop) {
            if (prop in obj) {
                delete obj[prop as keyof T];
                onChange(prop, undefined);
                return true;
            }
            return false;
        }
    });
}

/**
 * @description Creates a proxy for a function that executes a callback before or after the function call.
 * @param target {Function} target
 * @param callFn {(prop: string | symbol, args: any[]) => void} callFn
 * @param before {boolean} before - If true, callFn is executed before the function call; if false, after.
 * @returns 
 */
export function createCallFnAspectProxy(target: Function, callFn: (prop: string | symbol, args: any[]) => void , before: boolean = true): Function {
    return new Proxy(target, {
        apply(obj, thisArg, args) {
            const prop = obj.name || 'anonymous function';
            if(before) callFn(prop, args);
            let result =  Reflect.apply(obj, thisArg, args);
            if(!before) callFn(prop, args);
            return result;
        }
    });
}

/**
 * @description Creates a proxy for an object that restricts access to certain properties, treating them as private.
 * @param target {object} target
 * @param privateProps {Array<string | symbol>} privateProps - Array of property names or symbols that should be treated as private.
 * @returns 
 */
export function withPrivatePropsProxy<T extends object>(target: T, privateProps: Array<string | symbol>): T {
    return new Proxy(target, {
        get(obj, prop) {
            if (privateProps.includes(prop)) {
                throw new ReferenceError(`Access to private property ${String(prop)} is denied.`);
            }
            return obj[prop as keyof T];
        },
        set(obj, prop, value) {
            if (privateProps.includes(prop)) {
                throw new ReferenceError(`Cannot assign to private property ${String(prop)}.`);
            }
            obj[prop as keyof T] = value;
            return true;
        },
        deleteProperty(obj, prop) {
            if (privateProps.includes(prop)) {
                throw new ReferenceError(`Cannot delete private property ${String(prop)}.`);
            }
            delete obj[prop as keyof T];
            return true;
        },
        ownKeys(obj) {
            return Object.keys(obj).filter(key => !privateProps.includes(key));
        },
        getOwnPropertyDescriptor(obj, prop) {
            if (privateProps.includes(prop)) {
                return undefined;
            }
            const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            if (descriptor) {
                descriptor.enumerable = true;
            }
            return descriptor;
        }
    });
}