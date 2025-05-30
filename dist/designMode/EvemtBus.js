/**
 * @description EventBus class for managing event listeners and emitting events.
 */
export class EventBus {
    constructor() {
        this.listeners = {};
    }
    /**
     * @description Registers an event listener for a specific event.
     * @param event {string} - The event name to listen for.
     * @param listener {Function} - The callback function to execute when the event is emitted.
     */
    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }
    /**
     * @description Removes an event listener for a specific event.
     * @param event {string} - The event name to stop listening for.
     * @param listener {Function} - The callback function to remove from the event listeners.
     * @returns
     */
    off(event, listener) {
        if (!this.listeners[event])
            return;
        this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }
    /**
     * @description Emits an event, calling all registered listeners for that event.
     * @param event {string} - The event name to emit.
     * @param args {any[]} - Optional arguments to pass to the listener functions.
     */
    emit(event, ...args) {
        if (!this.listeners[event])
            return;
        this.listeners[event].forEach(listener => listener(...args));
    }
    /**
     * @description Clears all listeners for all events.
     */
    clear() {
        this.listeners = {};
    }
    /**
     * @description Clears all listeners for a specific event.
     * @param event {string} - The specific event name to clear listeners for.
     */
    clearSpecificEvent(event) {
        if (this.listeners[event]) {
            delete this.listeners[event];
        }
    }
}
