/**
 * @description A utility function to retry a given asynchronous function a specified number of times with exponential backoff.
 * @param fn {() => Promise<any>} The function to retry
 * @param maxAttempts {number} The maximum number of attempts to retry the function
 * @param delay {number} The initial delay between attempts in milliseconds, which will double with each retry
 * @returns
 */
export declare function retryFn(fn: () => Promise<any>, maxAttempts?: number, delay?: number): Promise<any>;
/**
 * @description A decorator function that times the execution of a given function and logs the time taken.
 * @param fn {(...args: any[]) => any} The function to be timed
 * @returns
 */
export declare function TimedFn(fn: (...args: any[]) => any): (...args: any[]) => any;
/**
 * @description A utility function that ensures a given function is executed only once, regardless of how many times it is called.
 * @param fn {Function} The function to be executed only once
 * @returns
 */
export declare function onceFn(fn: Function): (...args: any[]) => any;
/**
 * @description A utility function that memoizes the result of a function based on its arguments.
 * @param fn {Function} The function to be memoized
 * @returns
 */
export declare function memoizeFn(fn: Function): (...args: any[]) => any;
/**
 * @description Pipes the output of one function to the input of the next, allowing for function composition.
 * @param fns {Function[]} An array of functions to be piped together
 * @returns
 */
export declare function pipeFn(...fns: Function[]): (value: any) => any;
/**
 * @description Curries a function, allowing it to be called with fewer arguments than it expects, returning a new function that takes the remaining arguments.
 * @param fn {Function} The function to be curried
 * @returns
 */
export declare function curryFn(fn: Function): (...args: any[]) => any;
//# sourceMappingURL=Function.d.ts.map