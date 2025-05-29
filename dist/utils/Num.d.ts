/**
 * @ description: This function takes an array of numbers and returns the nth largest number in the array.
 * @param {Array<number>} arr
 * @param {number} n
 * @returns {number|null} The nth largest number or null if n is greater than the array length.
 */
export declare function getNthLargest(arr: Array<number>, n: number): number | null;
/**
 * @description: This function returns the number of decimal places in a number.
 * @param {number} num
 * @returns {number} The number of decimal places in the number.
 */
export declare function getDecimalPlaces(num: number): number;
/**
 * @description: This function adds two floating point numbers with precision.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} The sum of the two numbers with precision.
 */
export declare function addFloat(num1: number, num2: number): number;
/**
 * @description: This function subtracts two floating point numbers with precision.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} The difference of the two numbers with precision.
 */
export declare function subtractFloat(num1: number, num2: number): number;
/**
 * @description: This function multiplies two floating point numbers with precision.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} The product of the two numbers with precision.
 */
export declare function multiplyFloat(num1: number, num2: number): number;
/**
 * @description: This function divides two floating point numbers with precision.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} The quotient of the two numbers with precision.
 */
export declare function divideFloat(num1: number, num2: number): number;
/**
 * @description: This function formats a number with commas as thousands separators and two decimal places.
 * @param {number} num
 * @returns {string}
 */
export declare function formatNumber(num: number): string;
/**
 * @description: This function converts a number with commas to a decimal number.
 * @param {string} num
 * @returns {number}
 */
export declare function convertNumberToDecimal(num: string): number;
/**
 * @description: This function clamps a number between a minimum and maximum value.
 * @param {number} num
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export declare function clampNumber(num: number, min: number, max: number): number;
/**
 * @description: This function converts a number from one(10) base to another(2-36).
 * @param {number} number
 * @param {number} base
 * @returns {string}
 */
export declare function convertNumberBase(number: number, base?: number): string;
/**
 * @description: This function checks if a number is an integer.
 * @param {*} num
 * @returns {boolean}
 */
export declare function isNumberInteger(num: number): boolean;
/**
 * @description: This function pads a number with a specified character to a specified length.
 * @param {number | string} num
 * @param {number | string} padNum
 * @param {number} length
 * @returns {string}
 */
export declare function padNumber(num: number | string, padNum: number | string, length?: number): string;
//# sourceMappingURL=Num.d.ts.map