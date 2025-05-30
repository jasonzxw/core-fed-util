/**
 * Validator class that allows adding, validating, and clearing strategies.
 */
export class Validator {
    private strategies: Record<string, Function>;

    constructor() {
        this.strategies = {} as Record<string, (...args: any[]) => boolean>;
    }

    addStrategy(name: string, strategy: Function): void {
        if (typeof strategy !== 'function') {
            throw new Error(`Strategy for ${name} must be a function`);
        }
        this.strategies[name] = strategy;
    }

    validate(name: string, ...args: any[]): boolean {
        //@ts-ignore
        if (!this.strategies[name]) {
            throw new Error(`Strategy ${name} not found`);
        }
        return this.strategies[name](...args);
    }

    clear(): void {
        this.strategies = {};
    }

    clearSpecificStrategy(name: string): void {
        if (this.strategies[name]) {
            delete this.strategies[name];
        }
    }

}