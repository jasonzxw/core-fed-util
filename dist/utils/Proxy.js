/**
 * @description Creates a proxy for an object that validates property assignments.
 * @param target {object} target
 * @param validator {Validator} validator
 * @returns
 */
export function createValidatorProxy(target, validator) {
    return new Proxy(target, {
        set(obj, prop, value) {
            if (validator[prop] && validator[prop](value)) {
                obj[prop] = value;
                return true;
            }
            else {
                throw new TypeError(`Invalid value for property ${String(prop)}: ${value}`);
            }
        },
        get(obj, prop) {
            return obj[prop];
        },
        deleteProperty(obj, prop) {
            if (prop in obj) {
                delete obj[prop];
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
export function createReadonlyProxy(target) {
    return new Proxy(target, {
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop];
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
export function createObservableProxy(target, onChange) {
    return new Proxy(target, {
        set(obj, prop, value) {
            obj[prop] = value;
            onChange(prop, value);
            return true;
        },
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop];
            }
            throw new ReferenceError(`Property ${String(prop)} does not exist on target object.`);
        },
        deleteProperty(obj, prop) {
            if (prop in obj) {
                delete obj[prop];
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
export function createCallFnAspectProxy(target, callFn, before = true) {
    return new Proxy(target, {
        apply(obj, thisArg, args) {
            const prop = obj.name || 'anonymous function';
            if (before)
                callFn(prop, args);
            let result = Reflect.apply(obj, thisArg, args);
            if (!before)
                callFn(prop, args);
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
export function withPrivatePropsProxy(target, privateProps) {
    return new Proxy(target, {
        get(obj, prop) {
            if (privateProps.includes(prop)) {
                throw new ReferenceError(`Access to private property ${String(prop)} is denied.`);
            }
            return obj[prop];
        },
        set(obj, prop, value) {
            if (privateProps.includes(prop)) {
                throw new ReferenceError(`Cannot assign to private property ${String(prop)}.`);
            }
            obj[prop] = value;
            return true;
        },
        deleteProperty(obj, prop) {
            if (privateProps.includes(prop)) {
                throw new ReferenceError(`Cannot delete private property ${String(prop)}.`);
            }
            delete obj[prop];
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
