/**
 * @description This file contains functions to get the current local date and time in various formats.
 * @returns {string} Current local date and time in different formats
 */
export declare function getCurrentLocalDateTime(): string;
/**
 * @description This function returns the specific local date.
 * @param {Date} date
 * @returns {string}
 */
export declare function getSpecificLocalDateTime(date: Date): string;
/**
 * @description This function returns the current local date.
 * @returns {string} Current date in the format YYYY-MM-DD
 */
export declare function getCurrentLocalDate(): string;
/**
 * @description This function returns the specific date in the format YYYY/MM/DD.
 * @param {Date} date
 * @returns {string}
 */
export declare function getSpecificLocalDate(date: Date): string;
/**
 * @description This function returns the current local time.
 * @returns {string} Current time in the format HH:MM:SS
 */
export declare function getCurrentLocalTime(): string;
/**
 * @description This function returns the specific time in the format HH:MM:SS.
 * @param {Date} date
 * @returns {string}
 */
export declare function getSpecificTime(date: Date): string;
/**
 *
 * @returns {string} Current  UTC date
 */
export declare function getUtcTime(): string;
/**
 * @description This function returns the specific format date.
 * @param {Date} date
 * @param {string} format
 * @returns {string}
 */
export declare function getFormatDate(date: Date, format?: string): string;
/**
 * @description This function returns the specific format time.
 * @param {Date} date
 * @param {string} format
 * @returns {string}
 */
export declare function getFormatTime(date: Date, format?: string): string;
/**
 * @description This function returns the specific format date and time.
 * @param {Date} date
 * @param {string} format
 * @returns {string}
 */
export declare function getSpecificDateTime(date: Date, formatDate?: string, formatTime?: string): string;
/**
 * @description This function returns a relative time string based on the given date.
 * @param {Date} date
 * @returns {string} Relative time string like "2 days ago", "1 hour ago", etc.
 */
export declare function getRelativeTime(date: Date): string;
/**
 * @description This function calculates the difference between two dates in the specified unit.
 * @param {Date} date1
 * @param {Date} date2
 * @param {string} unit 'day' |'hour'|'minute'|'second'|'year'|'month'
 * @returns {number} Difference in the specified unit
 */
export declare function dateDiff(date1: Date, date2: Date, unit?: string): number;
/**
 * @description This function returns the first day of the month for a given date.
 * @param {Date} date
 * @returns {Date}
 */
export declare function getFirstDayOfMonth(date: Date): Date;
/**
 * @description This function returns the last day of the month for a given date.
 * @param {Date} date
 * @returns {number} Last day of the month
 */
export declare function getLastDayOfMonth(date: Date): number;
//# sourceMappingURL=Date.d.ts.map