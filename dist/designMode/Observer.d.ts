type ObserverOptions = {
    update: (...args: any[]) => void;
    [index: string]: any;
};
/**
 * @description Observer class for implementing the Observer design pattern.
 */
export declare class Observer {
    private observers;
    private name;
    private log;
    constructor(name: string);
    addObserver(observer: ObserverOptions): void;
    removeObserver(observer: ObserverOptions): void;
    notifyObservers(...args: any[]): void;
}
export {};
//# sourceMappingURL=Observer.d.ts.map