/**
 * @description Pauses execution for a specified number of milliseconds.
 * @param {number} ms
 * @returns {Promise}
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * @description Executes an array of asynchronous functions in order, waiting for each to complete before starting the next.
 * @param {Array<Function>} functions
 * @returns {Promise<void>}
 */
export async function executeAsyncFunctionsInOrder(functions) {
    let results = [];
    for (const func of functions) {
        try {
            results.push({ status: "fulfilled", value: await func() });
        }
        catch (err) {
            results.push({ status: "rejected", reason: err });
        }
    }
    return results;
}
/**
 * @description Executes an array of asynchronous functions concurrently, waiting for all to complete.
 * @param {Array<Function>} functions
 * @returns {Promise<Array>}
 */
export async function executeAsyncFunctionsConcurrently(functions) {
    const result = await Promise.all(functions.map(func => func()));
    return result;
}
/**
 * @description Runs an array of asynchronous tasks with a specified maximum concurrency.
 * @param {Array<Function>} tasks
 * @param {number} maxConcurrency
 * @returns {Array}
 */
export async function runWithConcurrencyInLimit(tasks, maxConcurrency) {
    const results = [];
    let current = 0;
    const workers = Array(Math.min(maxConcurrency, tasks.length))
        //@ts-ignore
        .fill()
        .map(async () => {
        while (current < tasks.length) {
            const index = current++;
            try {
                results[index] = await tasks[index]();
            }
            catch (err) {
                results[index] = err;
            }
        }
    });
    await Promise.all(workers);
    return results;
}
/**
 * @description Converts a synchronous function to an asynchronous one, allowing it to be used with async/await.
 * @param {Function} fn
 * @returns {Promise}
 */
async function asyncify(fn) {
    return (...args) => new Promise((resolve, reject) => {
        try {
            resolve(fn(...args));
        }
        catch (error) {
            reject(error);
        }
    });
}
