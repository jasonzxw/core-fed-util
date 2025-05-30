/**
 * Validator class that allows adding, validating, and clearing strategies.
 */
export class Validator {
    constructor() {
        this.strategies = {};
    }
    addStrategy(name, strategy) {
        if (typeof strategy !== 'function') {
            throw new Error(`Strategy for ${name} must be a function`);
        }
        this.strategies[name] = strategy;
    }
    validate(name, ...args) {
        //@ts-ignore
        if (!this.strategies[name]) {
            throw new Error(`Strategy ${name} not found`);
        }
        return this.strategies[name](...args);
    }
    clear() {
        this.strategies = {};
    }
    clearSpecificStrategy(name) {
        if (this.strategies[name]) {
            delete this.strategies[name];
        }
    }
}
