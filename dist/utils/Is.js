export function isType(value, type) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
}
export function isNumber(value) {
    return isType(value, 'Number');
}
export function isString(value) {
    return isType(value, 'String');
}
export function isArray(value) {
    return isType(value, 'Array');
}
export function isObject(value) {
    return isType(value, 'Object') && Array.isArray(value) === false;
}
export function isFunction(value) {
    return isType(value, 'Function');
}
export function isBoolean(value) {
    return isType(value, 'Boolean');
}
export function isNull(value) {
    return value === null;
}
export function isUndefined(value) {
    return value === undefined;
}
export function isDate(value) {
    return isType(value, 'Date');
}
export function isRegExp(value) {
    return isType(value, 'RegExp');
}
export function isSymbol(value) {
    return isType(value, 'Symbol');
}
export function isBigInt(value) {
    return isType(value, 'BigInt');
}
export function isError(value) {
    return isType(value, 'Error');
}
export function isDateTime(value) {
    return isType(value, 'Date') || isType(value, 'DateTime');
}
export function isMap(value) {
    return isType(value, 'Map');
}
export function isSet(value) {
    return isType(value, 'Set');
}
export function isWeakMap(value) {
    return isType(value, 'WeakMap');
}
export function isWeakSet(value) {
    return isType(value, 'WeakSet');
}
export function isPromise(value) {
    return isType(value, 'Promise') && isFunction(value.then);
}
