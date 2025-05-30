
type BaseSingleton = {
    name: string;
    data: Record<string, any>;
    createdAt: Date;
    setData(key: string, value: any): void;
    getData(key: string): any;
    [index:string]: any; // Allow additional properties
}

/**
 * @description NamedSingleton class that implements the Singleton design pattern.
 */
export class NamedSingleton {
    static instances = new Map<string,BaseSingleton>();
            
    static getInstance(name:string,options: BaseSingleton = {
        name: name,
        data: {},
        createdAt: new Date(),
        setData(key: string, value: any) {
            this.data[key] = value;
        },
        getData(key) {
            return this.data[key];
        }
    }): BaseSingleton {
        if (!NamedSingleton.instances.has(name)) {
            NamedSingleton.instances.set(name, options);
        }
        return NamedSingleton.instances.get(name)!!;
    }
}