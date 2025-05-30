
import { Logger } from "../utils/Log";
type ObserverOptions = {
    update: (...args: any[]) => void;  
    [index:string]: any; // Allow additional properties
}
/**
 * @description Observer class for implementing the Observer design pattern.
 */
export class Observer{

    private observers: ObserverOptions[] = [];
    private name: string;
    private log: Logger;

    constructor(name: string) {
        this.name = name;
        this.log = new Logger(name, 0); // Default log level is DEBUG
    }
    
    // Method to add an observer
    addObserver(observer: ObserverOptions): void {
        this.log.debug(`[Adding observer]: ${observer}`);
        this.observers.push(observer);
    }
    
    // Method to remove an observer
    removeObserver(observer: ObserverOptions): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    // Method to notify all observers
    notifyObservers(...args: any[]): void {
        this.log.debug(`[Notifying observers]: ${args}`);
        this.observers.forEach(observer => observer.update(...args));
    }
}