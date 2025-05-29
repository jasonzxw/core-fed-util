/**
 * @description Pauses execution for a specified number of milliseconds.
 * @param {number} ms
 * @returns {Promise}
 */
export declare function sleep(ms: number): Promise<void>;
type AsyncResult = {
    status: 'fulfilled' | 'rejected';
    value?: any;
    reason?: any;
};
/**
 * @description Executes an array of asynchronous functions in order, waiting for each to complete before starting the next.
 * @param {Array<Function>} functions
 * @returns {Promise<void>}
 */
export declare function executeAsyncFunctionsInOrder(functions: Array<Function>): Promise<Array<AsyncResult>>;
/**
 * @description Executes an array of asynchronous functions concurrently, waiting for all to complete.
 * @param {Array<Function>} functions
 * @returns {Promise<Array>}
 */
export declare function executeAsyncFunctionsConcurrently(functions: Array<Function>): Promise<Array<any>>;
/**
 * @description Runs an array of asynchronous tasks with a specified maximum concurrency.
 * @param {Array<Function>} tasks
 * @param {number} maxConcurrency
 * @returns {Array}
 */
export declare function runWithConcurrencyInLimit(tasks: Array<Function>, maxConcurrency: number): Promise<Array<any>>;
export {};
//# sourceMappingURL=Async.d.ts.map