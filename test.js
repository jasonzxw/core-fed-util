function validateDate(date ,format) {
    const regex = new RegExp(`^\\d{4}${format}\\d{2}${format}\\d{2}$`);
    return regex.test(date) && !isNaN(new Date(date).getTime());
}

console.log(validateDate('2023/10/05', '/')); // true
