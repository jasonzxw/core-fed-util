/**
 * Log Level Enum
 */
declare const LogLevel: {
    readonly DEBUG: 0;
    readonly INFO: 1;
    readonly WARN: 2;
    readonly ERROR: 3;
};
type LogLevel = typeof LogLevel[keyof typeof LogLevel];
type LogLevelName = keyof typeof LogLevel;
type LogStyle = {
    [key in LogLevelName]: string;
};
/**
 * Logger Class
 */
export declare class Logger {
    name: string;
    level: typeof LogLevel[keyof typeof LogLevel];
    styles: LogStyle;
    /**
     * @param {string} [name='global'] - Log name, used to identify the source of the log
     * @param {LogLevel} [level=LogLevel.DEBUG] - Log level, controls which logs are printed
     */
    constructor(name?: string, level?: LogLevel);
    setLevel(level: typeof LogLevel[keyof typeof LogLevel]): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    /**
     * Performance timing log (only for info level)
     * @param {string} label -
     * @returns {Function}
     */
    time(label: string): () => void;
    /**
     * generate log prefix with timestamp and level
     * @private
     */
    _formatPrefix(level: LogLevel, levelName: keyof LogStyle): string[];
    /**
     * core log function
     * @private
     */
    _log(level: LogLevel, levelName: keyof LogStyle, ...args: any[]): void;
}
export {};
//# sourceMappingURL=Log.d.ts.map