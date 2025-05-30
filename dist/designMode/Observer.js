import { Logger } from "../utils/Log";
/**
 * @description Observer class for implementing the Observer design pattern.
 */
export class Observer {
    constructor(name) {
        this.observers = [];
        this.name = name;
        this.log = new Logger(name, 0); // Default log level is DEBUG
    }
    // Method to add an observer
    addObserver(observer) {
        this.log.debug(`[Adding observer]: ${observer}`);
        this.observers.push(observer);
    }
    // Method to remove an observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    // Method to notify all observers
    notifyObservers(...args) {
        this.log.debug(`[Notifying observers]: ${args}`);
        this.observers.forEach(observer => observer.update(...args));
    }
}
