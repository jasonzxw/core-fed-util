/**
 * @description: A function that generates a random integer between two values.
 * @param {number} min
 * @param {number} max
 * @returns {number} A random integer between min and max, inclusive.
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @description This function returns a random arrray in array.
 * @param {array} array
 * @returns {*}
 */
export function getRandomFromArray(array) {
    return array[getRandomInt(0, array.length - 1)];
}
/**
 * @description This function returns int number
 * @param {number} num
 * @returns {number}
 */
export function getInteger(num) {
    let x = Number(num);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}
/**
 * @description This function returns float number
 * @param {number} num
 * @returns {number}
 */
export function getFloat(num) {
    return num - getInteger(num);
}
/**
 * @description This function returns the radian to angle.
 * @param {number} radian
 * @returns {number}
 */
export function radianToAngle(radian) {
    return radian * (180 / Math.PI);
}
/**
 * @description This function returns the angle to radian.
 * @param {number} angle
 * @returns {number}
 */
export function angleToRadian(angle) {
    return angle * (Math.PI / 180);
}
/**
 * @description This function returns the radian between point and  center of a circle .
 * @param {number} x
 * @param {number} y
 * @param {number} centerX
 * @param {number} centerY
 * @returns {number} The radian between the point (x, y) and the center of the circle (centerX, centerY).
 */
export function getRadian(x, y, centerX, centerY) {
    return Math.atan2(y - centerY, x - centerX);
}
