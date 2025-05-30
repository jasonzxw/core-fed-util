/**
 * Validator class that allows adding, validating, and clearing strategies.
 */
export declare class Validator {
    private strategies;
    constructor();
    addStrategy(name: string, strategy: Function): void;
    validate(name: string, ...args: any[]): boolean;
    clear(): void;
    clearSpecificStrategy(name: string): void;
}
//# sourceMappingURL=Validator.d.ts.map