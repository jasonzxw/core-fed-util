
type BaseNode<T> = {
    data:T;
    next: BaseNode<T> | null;
}
/**
 * Node class
 */
class Node<T> {
    data: T;
    next: BaseNode<T> | null;
    constructor(data:T) {
        this.data = data;
        this.next = null;
    }
}
/**
 * LinkedList class
 */
export class LinkedList<T> {
    head: Node<T> | null;
    size: number;
    current: Node<T> | null;
    constructor() {
        this.head = null;
        this.size = 0;
        this.current = null;
    }

    /**
     * 
     * @returns {Node} head of the linked list
     */
    getHead(): Node<T> | null {
        return this.head;
    }

    /**
     * 
     * @returns {Node} current node of the linked list
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @description Adds a node to the end of the linked list.
     * @param {*} data 
     */
    add(data: T) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /**
     * @description Remove node from the linked list.
     * @param {*} data 
     * @returns {void}
     */
    remove(data: T) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    /**
     * @description Get the index of a node in the linked list.
     * @param {*} data 
     * @returns {number}
     */
    indexOf(data: T): number {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    /**
     * @description Check if the linked list contains a node.
     * @param {*} data 
     * @returns {boolean}
     */
    contains(data: T): boolean {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * @description Get the node at the index.
     * @param {*} index 
     * @returns {Node} node at the index
     */
    get(index: number): T | null {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!!.next;
        }
        return current!!.data;
    }

    /**
     * @description Insert a node at the index.
     * @param {*} index 
     * @param {*} data 
     * @returns {void}
     */
    insert(index:number, data: T) {
        if (index < 0 || index > this.size) {
            return;
        }
        const node = new Node(data);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!!.next;
            }
            node.next = current!!.next;
            current!!.next = node;
        }
        this.size++;
    }

    /**
     * @description Clears the linked list.
     */
    clear() {
        this.head = null;
        this.size = 0;
        this.current = null;
    }


}