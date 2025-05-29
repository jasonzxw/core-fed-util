/**
 * Stack implementation in JavaScript
 */
export class Stack<T>{
    items: T[];
    constructor(){
        this.items = [];
    }
    /**
     * @description Adds an item to the stack.
     * @param {*} element 
     */
    push(element: T){
        this.items.push(element);
    }

    /**
     * @description Removes the last item from the stack.
     * @returns {*} The last item in the stack.
     */
    pop(){
        if(this.isEmpty()){
            return "[Stack is empty]";
        }
        return this.items.pop();
    }

    /**
     * @description Gets the last item in the stack without removing it.
     * @returns {*} The last item in the stack.
     */
    peek(){
        return this.items[this.items.length - 1];
    }

    /**
     * @description Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty(){
        return this.items.length === 0;
    }

    /**
     * @description Gets the size of the stack.
     * @returns {number}
     */
    size(){
        return this.items.length;
    }

    /**
     * @description print stack.
     * @returns {string} A string representation of the stack.
     */
    printStack(){
        let str = "";
        for(let i = 0; i < this.size(); i++){
            str += this.items[i] + " ";
        }
        return str;
    }

    /**
     * @description Checks if the stack has an item.
     * @param {*} callback 
     */
    excute(callback: (item: T) => void){
        while(!this.isEmpty()){
            const item = this.pop();
            if(typeof item === "function"){
                item();
            }else (
                callback(item as T)
            )
        }
    }
    /**
     * @description Clears the stack.
     */
    clear(){
        this.items = [];
    }
}