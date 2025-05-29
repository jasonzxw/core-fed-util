/**
 * Queue implementation using an array
 */
export declare class Queue<T> {
    items: T[];
    constructor();
    /**
     * @description Adds an item to the queue.
     * @param {*} item
     */
    enqueue(item: T): void;
    /**
     * @description Removes the first item from the queue.
     * @returns {*} The first item in the queue.
     */
    dequeue(): T | undefined;
    /**
     * @description Gets the first item in the queue without removing it.
     * @returns {*} The first item in the queue.
     */
    isEmpty(): boolean;
    /**
     * @description Gets the first item in the queue without removing it.
     * @returns {*} The first item in the queue.
     */
    size(): number;
    /**
     * @description Gets the first item in the queue without removing it.
     * @returns {*} The first item in the queue.
     */
    has(item: T): boolean;
    /**
     * @description Executes all items in the queue.
     * @param {*} callback
     */
    execute(callback: (item: T) => void): void;
    /**
     * @description Clears ths Queus.
     * @returns {*} void.
     */
    clear(): void;
}
//# sourceMappingURL=Queue.d.ts.map