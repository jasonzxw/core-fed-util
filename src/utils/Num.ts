/**
 * @ description: This function takes an array of numbers and returns the nth largest number in the array.
 * @param {Array<number>} arr 
 * @param {number} n 
 * @returns {number|null} The nth largest number or null if n is greater than the array length.
 */
export function getNthLargest(arr: Array<number>, n: number): number | null {
    if (n > arr.length) {
        return null;
    }
    const sortedArr = arr.slice().sort((a, b) => b - a);
    return sortedArr[n - 1];
}

/**
 * @description: This function returns the number of decimal places in a number.
 * @param {number} num 
 * @returns {number} The number of decimal places in the number.
 */
export function getDecimalPlaces(num: number): number {
    if (num % 1 !== 0) {
        return num.toString().split('.')[1].length;
    }
    return 0;
}

/**
 * @description: This function adds two floating point numbers with precision.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The sum of the two numbers with precision.
 */
export function addFloat(num1: number, num2: number): number {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const maxDecimalPlaces = Math.max(decimalPlaces1, decimalPlaces2);
    const factor = Math.pow(10, maxDecimalPlaces);
    return (num1 * factor + num2 * factor) / factor;
}

/**
 * @description: This function subtracts two floating point numbers with precision.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The difference of the two numbers with precision.
 */
export function subtractFloat(num1: number, num2: number): number {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const maxDecimalPlaces = Math.max(decimalPlaces1, decimalPlaces2);
    const factor = Math.pow(10, maxDecimalPlaces);
    return (num1 * factor - num2 * factor) / factor;
}

/**
 * @description: This function multiplies two floating point numbers with precision.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The product of the two numbers with precision.
 */
export function multiplyFloat(num1: number, num2: number): number {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const totalDecimalPlaces = decimalPlaces1 + decimalPlaces2;
    return (num1 * num2) / Math.pow(10, totalDecimalPlaces);
}

/**
 * @description: This function divides two floating point numbers with precision.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} The quotient of the two numbers with precision.
 */
export function divideFloat(num1: number, num2: number): number {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const totalDecimalPlaces = decimalPlaces1 - decimalPlaces2;
    return (num1 / num2) * Math.pow(10, totalDecimalPlaces);
}

/**
 * @description: This function formats a number with commas as thousands separators and two decimal places.
 * @param {number} num 
 * @returns {string}
 */
export function formatNumber(num: number): string {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

/**
 * @description: This function converts a number with commas to a decimal number.
 * @param {string} num 
 * @returns {number}
 */
export function convertNumberToDecimal(num: string): number {
    return parseFloat(num.replace(/,/g, ''));
}

/**
 * @description: This function clamps a number between a minimum and maximum value.
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function clampNumber(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * @description: This function converts a number from one(10) base to another(2-36).
 * @param {number} number 
 * @param {number} base 
 * @returns {string}
 */
export function convertNumberBase(number: number, base = 10): string {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Invalid number');
    }
    if (base < 2 || base > 36) {
        throw new Error('Base must be between 2 and 36');
    }
    return number.toString(base);
}

/**
 * @description: This function checks if a number is an integer.
 * @param {*} num 
 * @returns {boolean}
 */
export function isNumberInteger(num: number): boolean {
    return Number.isInteger(num);
}

/**
 * @description: This function pads a number with a specified character to a specified length.
 * @param {number | string} num 
 * @param {number | string} padNum 
 * @param {number} length 
 * @returns {string}
 */
export function padNumber(num: number | string, padNum: number | string, length = 2): string {
    return num.toString().padStart(length, padNum.toString());
}
