type BaseNode<T> = {
    data: T;
    next: BaseNode<T> | null;
};
/**
 * Node class
 */
declare class Node<T> {
    data: T;
    next: BaseNode<T> | null;
    constructor(data: T);
}
/**
 * LinkedList class
 */
export declare class LinkedList<T> {
    head: Node<T> | null;
    size: number;
    current: Node<T> | null;
    constructor();
    /**
     *
     * @returns {Node} head of the linked list
     */
    getHead(): Node<T> | null;
    /**
     *
     * @returns {Node} current node of the linked list
     */
    getSize(): number;
    /**
     * @description Adds a node to the end of the linked list.
     * @param {*} data
     */
    add(data: T): void;
    /**
     * @description Remove node from the linked list.
     * @param {*} data
     * @returns {void}
     */
    remove(data: T): void;
    /**
     * @description Get the index of a node in the linked list.
     * @param {*} data
     * @returns {number}
     */
    indexOf(data: T): number;
    /**
     * @description Check if the linked list contains a node.
     * @param {*} data
     * @returns {boolean}
     */
    contains(data: T): boolean;
    /**
     * @description Get the node at the index.
     * @param {*} index
     * @returns {Node} node at the index
     */
    get(index: number): T | null;
    /**
     * @description Insert a node at the index.
     * @param {*} index
     * @param {*} data
     * @returns {void}
     */
    insert(index: number, data: T): void;
    /**
     * @description Clears the linked list.
     */
    clear(): void;
}
export {};
//# sourceMappingURL=LinkedList.d.ts.map