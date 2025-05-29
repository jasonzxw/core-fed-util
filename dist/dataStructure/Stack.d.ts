/**
 * Stack implementation in JavaScript
 */
export declare class Stack<T> {
    items: T[];
    constructor();
    /**
     * @description Adds an item to the stack.
     * @param {*} element
     */
    push(element: T): void;
    /**
     * @description Removes the last item from the stack.
     * @returns {*} The last item in the stack.
     */
    pop(): T | "[Stack is empty]" | undefined;
    /**
     * @description Gets the last item in the stack without removing it.
     * @returns {*} The last item in the stack.
     */
    peek(): T;
    /**
     * @description Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * @description Gets the size of the stack.
     * @returns {number}
     */
    size(): number;
    /**
     * @description print stack.
     * @returns {string} A string representation of the stack.
     */
    printStack(): string;
    /**
     * @description Checks if the stack has an item.
     * @param {*} callback
     */
    excute(callback: (item: T) => void): void;
    /**
     * @description Clears the stack.
     */
    clear(): void;
}
//# sourceMappingURL=Stack.d.ts.map