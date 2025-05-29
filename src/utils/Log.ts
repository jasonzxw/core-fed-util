/**
 * Log Level Enum
 */
const LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
} as const;

type LogLevel = typeof LogLevel[keyof typeof LogLevel];
type LogLevelName = keyof typeof LogLevel;
type LogStyle ={
    [key in LogLevelName]: string;
};

/**
 * Logger Class
 */
export class Logger {
    name: string;
    level: typeof LogLevel[keyof typeof LogLevel];
    styles: LogStyle;
    /**
     * @param {string} [name='global'] - Log name, used to identify the source of the log 
     * @param {LogLevel} [level=LogLevel.DEBUG] - Log level, controls which logs are printed
     */
    constructor(name = 'global', level = LogLevel.DEBUG) {
        this.name = name;
        this.level = level;
        this.styles = {
            DEBUG: 'color: #666; background: #eee; padding: 2px 4px; border-radius: 3px;',
            INFO: 'color: #1e88e5; background: #e3f2fd; padding: 2px 4px; border-radius: 3px;',
            WARN: 'color: #ff8f00; background: #fff8e1; padding: 2px 4px; border-radius: 3px;',
            ERROR: 'color: #d32f2f; background: #ffebee; padding: 2px 4px; border-radius: 3px;'
        };
    }

    setLevel(level: typeof LogLevel[keyof typeof LogLevel]) {
        this.level = level;
    }

    debug(...args: any[]) {
        this._log(LogLevel.DEBUG, 'DEBUG', ...args);
    }

    info(...args: any[]) {
        this._log(LogLevel.INFO, 'INFO', ...args);
    }

    warn(...args: any[]) {
        this._log(LogLevel.WARN, 'WARN', ...args);
    }

    error(...args: any[]) {
        this._log(LogLevel.ERROR, 'ERROR', ...args);
    }

    /**
     * Performance timing log (only for info level)
     * @param {string} label - 
     * @returns {Function} 
     */
    time(label:string) {
        const start = performance.now();
        return () => {
            const duration = (performance.now() - start).toFixed(1);
            this.info(`⏱️ ${label} | time consuming: ${duration}ms`);
        };
    }

    /**
     * generate log prefix with timestamp and level
     * @private
     */
    _formatPrefix(level:LogLevel, levelName:keyof LogStyle) {
        const timestamp = new Date().toISOString().slice(11, 23);
        return [`%c[${timestamp}] [${this.name}] [${levelName}]`, this.styles[levelName]];
    }

    /**
     * core log function
     * @private
     */
    _log(level: LogLevel, levelName: keyof LogStyle, ...args: any[]) {
        if (this.level > level) return;

        try {
            // Browser Environment
            if (typeof window !== 'undefined') {
                // @ts-ignore
                console[levelName.toLowerCase()](...this._formatPrefix(level, levelName), ...args);
            }
            // Node Environment
            else {
                const prefix = `[${new Date().toISOString()}] [${this.name}] [${levelName}]`;
                // @ts-ignore
                console[levelName.toLowerCase()](prefix, ...args);
            }
        } catch (e) {
            console.error('Logger error:', e);
        }
    }
}
