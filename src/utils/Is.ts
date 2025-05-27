export function isType(value: unknown, type: string): boolean {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
}
export function isNumber(value: unknown): boolean {
    return isType(value, 'Number');
}
export function isString(value: unknown): boolean {
    return isType(value, 'String');
}
export function isArray(value: unknown): boolean {
    return isType(value, 'Array');
}

export function isObject(value: unknown): boolean {
    return isType(value, 'Object') && Array.isArray(value) === false;
}

export function isFunction(value: unknown): boolean {
    return isType(value, 'Function');
}

export function isBoolean(value: unknown): boolean {
    return isType(value, 'Boolean');
}

export function isNull(value: unknown): boolean {
    return value === null;
}

export function isUndefined(value: unknown): boolean {
    return value === undefined;
}

export function isDate(value: unknown): boolean {
    return isType(value, 'Date');
}

export function isRegExp(value: unknown): boolean {
    return isType(value, 'RegExp');
}

export function isSymbol(value: unknown): boolean {
    return isType(value, 'Symbol');
}

export function isBigInt(value: unknown): boolean {
    return isType(value, 'BigInt');
}

export function isError(value: unknown): boolean {
    return isType(value, 'Error');
}

export function isDateTime(value: unknown): boolean {
    return isType(value, 'Date') || isType(value, 'DateTime');
}

export function isMap(value: unknown): boolean {
    return isType(value, 'Map');
}

export function isSet(value: unknown): boolean {
    return isType(value, 'Set');
}

export function isWeakMap(value: unknown): boolean {
    return isType(value, 'WeakMap');
}

export function isWeakSet(value: unknown): boolean {
    return isType(value, 'WeakSet');
}
export function isPromise(value: unknown): boolean {
    return isType(value, 'Promise') && isFunction((value as Promise<unknown>).then);
}