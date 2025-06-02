/**
 * @description Validates a username based on specific criteria.
 * @param email {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
export function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
/**
 * @description Validates a password based on specific criteria.:
 * Validates a password to ensure it contains at least one uppercase letter, one lowercase letter, one digit, and is at least 8 characters long.
 * @param password {string} password - The password to validate.
 * @returns {boolean} - Returns true if the password is valid, false otherwise.
 */
export function validPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}
/**
 * @description Validates a id card based on specific criteria.
 * @param idCard {string} idCard - The ID card number to validate.
 * @returns {boolean} - Returns true if the ID card number is valid, false otherwise.
 */
export function validIdCard(idCard) {
    const idCardRegex = /^(?:\d{15}|\d{18}|\d{17}[\dXx])$/;
    return idCardRegex.test(idCard);
}
/**
 * @description Validates a URL based on specific criteria.
 * @param url {string} url - The URL to validate.
 * @returns {boolean} - Returns true if the URL is valid, false otherwise.
 */
export function validateURL(url) {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
}
/**
 * @description Validates a date string against a specific format.
 * @param date {string} date - The date string to validate.
 * @param format {string} format - The date format to validate against, e.g., '-' or '/'.
 * @returns {boolean} - Returns true if the date is valid according to the specified format, false otherwise.
 */
export function validateFormatDate(date, format) {
    const regex = new RegExp(`^\\d{4}${format}\\d{2}${format}\\d{2}$`);
    return regex.test(date) && !isNaN(new Date(date).getTime());
}
