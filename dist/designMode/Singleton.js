/**
 * @description NamedSingleton class that implements the Singleton design pattern.
 */
export class NamedSingleton {
    static getInstance(name, options = {
        name: name,
        data: {},
        createdAt: new Date(),
        setData(key, value) {
            this.data[key] = value;
        },
        getData(key) {
            return this.data[key];
        }
    }) {
        if (!NamedSingleton.instances.has(name)) {
            NamedSingleton.instances.set(name, options);
        }
        return NamedSingleton.instances.get(name);
    }
}
NamedSingleton.instances = new Map();
