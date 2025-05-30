type BaseSingleton = {
    name: string;
    data: Record<string, any>;
    createdAt: Date;
    setData(key: string, value: any): void;
    getData(key: string): any;
    [index: string]: any;
};
/**
 * @description NamedSingleton class that implements the Singleton design pattern.
 */
export declare class NamedSingleton {
    static instances: Map<string, BaseSingleton>;
    static getInstance(name: string, options?: BaseSingleton): BaseSingleton;
}
export {};
//# sourceMappingURL=Singleton.d.ts.map