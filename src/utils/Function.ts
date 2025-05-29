/**
 * @description A utility function to retry a given asynchronous function a specified number of times with exponential backoff.
 * @param fn {() => Promise<any>} The function to retry
 * @param maxAttempts {number} The maximum number of attempts to retry the function
 * @param delay {number} The initial delay between attempts in milliseconds, which will double with each retry
 * @returns 
 */
export async function retryFn(fn: () => Promise<any>, maxAttempts: number = 3, delay: number = 1000): Promise<any> {
    try {
        return await fn();
    } catch (err) {
        if (maxAttempts <= 1) throw err;
        await new Promise(res => setTimeout(res, delay));
        return retryFn(fn, maxAttempts - 1, delay * 2);
    }
}

/**
 * @description A decorator function that times the execution of a given function and logs the time taken.
 * @param fn {(...args: any[]) => any} The function to be timed
 * @returns 
 */
export function TimedFn(fn: (...args: any[]) => any) {
    return function (...args: any[]) {
        const start = performance.now();
        //@ts-ignore
        const result = fn.apply(this, args);
        const end = performance.now();
        console.log(`Time consuming: ${(end - start).toFixed(2)}ms`);
        return result;
    };
}

/**
 * @description A utility function that ensures a given function is executed only once, regardless of how many times it is called.
 * @param fn {Function} The function to be executed only once
 * @returns 
 */
export function onceFn(fn: Function) {
    let called = false;
    return function (...args: any[]) {
        if (called) return;
        called = true;
        //@ts-ignore
        return fn.apply(this, args);
    };
}

/**
 * @description A utility function that memoizes the result of a function based on its arguments.
 * @param fn {Function} The function to be memoized
 * @returns 
 */
export function memoizeFn(fn: Function) {
    const cache = new Map();
    return function (...args: any[]) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        //@ts-ignore
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

/**
 * @description Pipes the output of one function to the input of the next, allowing for function composition.
 * @param fns {Function[]} An array of functions to be piped together
 * @returns 
 */
export function pipeFn(...fns: Function[]) {
    return function (value: any) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

/**
 * @description Curries a function, allowing it to be called with fewer arguments than it expects, returning a new function that takes the remaining arguments.
 * @param fn {Function} The function to be curried
 * @returns 
 */
export function curryFn(fn: Function) {
    return function curried(...args: any[]) {
      if (args.length >= fn.length) {
        //@ts-ignore
        return fn.apply(this, args);
      } else {
        //@ts-ignore
        return (...nextArgs) => curried.apply(this, args.concat(nextArgs));
      }
    };
  }