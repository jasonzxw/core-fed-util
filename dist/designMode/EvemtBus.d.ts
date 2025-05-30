/**
 * @description EventBus class for managing event listeners and emitting events.
 */
export declare class EventBus {
    private listeners;
    /**
     * @description Registers an event listener for a specific event.
     * @param event {string} - The event name to listen for.
     * @param listener {Function} - The callback function to execute when the event is emitted.
     */
    on(event: string, listener: Function): void;
    /**
     * @description Removes an event listener for a specific event.
     * @param event {string} - The event name to stop listening for.
     * @param listener {Function} - The callback function to remove from the event listeners.
     * @returns
     */
    off(event: string, listener: Function): void;
    /**
     * @description Emits an event, calling all registered listeners for that event.
     * @param event {string} - The event name to emit.
     * @param args {any[]} - Optional arguments to pass to the listener functions.
     */
    emit(event: string, ...args: any[]): void;
    /**
     * @description Clears all listeners for all events.
     */
    clear(): void;
    /**
     * @description Clears all listeners for a specific event.
     * @param event {string} - The specific event name to clear listeners for.
     */
    clearSpecificEvent(event: string): void;
}
//# sourceMappingURL=EvemtBus.d.ts.map