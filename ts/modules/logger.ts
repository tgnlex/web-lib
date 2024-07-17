import {EventEmitter} from 'event';


module Log = {
  const logLevels: Levels = {
    'debug': 0,
    'trace': 1,
    'event': 2,
    'info':  3,
    'notice':4,
    'warn': 5,
    'error': 6
  };
  const modules = {
    'test': 'debug',
    'main': 'trace',
    'lib': 'event' 
  };
  class JsonFormat {
    public static name = "Simple JSON log"
    private static getTime() {
      let dt = new Date();
      return dt.toLocaleTimeString();
    };
    private static getDate() {
      let dt = new Date();
      return dt.toLocaleDateString();
    };
    public static fmt = (entry: Entry): string => {
      let format = {
        log: {
          timestamp: `[${this.getDate()}] | [${this.getTime()}]`,
          format: `${this.name}`,
          module: `${entry.module}`,
          message: {
            body: `[${entry.level}]: ${entry.message}`,
            location: `${entry.location}`
          },
        }
      }
    } 
  }

  class Logger {
    private logManager: Emitter;
    private minLevel: number;
    private name?: string;
    private description?: string;
    private module: string;
    private format: Format;
    private readonly levels: Levels = logLevels;
    constructor(
        logManager: Emitter, 
        module: string, 
        minLevel: string, 
        name: string, 
        description: string,
    ) {
    this.logManager = logManager;
    this.module = module;
    this.minLevel = parseLevel(this.levels, minLevel);
    this.name = name;
    this.description = description;
  }
  public log(logLevel: string, message: string, ): void {
    const level = parseLevel(this.levels, logLevel);
    if (level < this.minLevel) return;
    const logEntry: Entry = {
      level: logLevel, 
      logger: this.name, 
      description: this.description,
      format: this.format,
      module: this.module, 
      message
    };
    const logError = new Error("");
    if (logError.stack) {
      const cla = logError.stack.split("\n");
      let idx = 1;
      while (idx < cla.length && cla[idx].includes("at Logger.Object.")) idx++;
      if (idx < cla.length) {
        logEntry.location = cla[idx].slice(cla[idx].indexOf("at ") + 3, cla[idx].length);
      }
    }
    this.logManager.emit('log', logEntry);
  }
  public debug (message: string): void  { this.log('debug',  message); }
  public trace (message: string): void  { this.log('trace',  message); }
  public event (message: string): void  { this.log('event',  message); }
  public info  (message: string): void   { this.log('info',   message); }
  public notice(message: string): void { this.log('notice', message); }
  public warn  (message: string): void   { this.log('warn',   message); }
  public error (message: string): void  { this.log('error',  message); }
}


class LogManager extends EventEmitter {
  private options: LogOptions = {
    logger: "",
    description: "",
    minLevels: modules,
    format: Json
  }
  private consoleLoggerRegistered: boolean = false;
  public configure(options: LogOptions): LogManager {
    this.options = Object.assign({}, this.options, options);
    return this;
  }
  public getLogger(module: string): Logger {
    let name = this.options.logger;
    let description = this.options.description;
    let minLevel = 'none';
    let match = '';
    for (const key in this.options.minLevels) {
      if (module.startsWith(key) && key.length >= match.length) {
        minLevel = this.options.minLevels[key];
        match = key;
      }
    }
    return new Logger(this, module, minLevel, name, description);
  }
  public onLogEntry(listener: (logEntry: LogEntry) => void): LogManager {
    this.on('log', listener);
    return this;
  }
  public registerConsoleLogger(): LogManager {
    const fmt = this.options.activeFormat.fmt;
    if (this.consoleLoggerRegistered) return this;
    this.onLogEntry((logEntry) => {
      const message = fmt(logEntry);
      switch (logEntry.level) {
        case 'debug':
            console.debug(message);
            break;
        case 'trace':
            console.debug(message);
            break;
        case 'event':
            console.info(message);
            break;
        case 'info':
            console.info(message);
            break;
        case 'notice':
            console.warn(message);
            break;
        case 'warn':
            console.warn(message);
            break;
        case 'error':
            console.error(message);
            break;
        default: 
          console.log(`${logEntry.level} ${msg}`);
      }
    });
    this.consoleLoggerRegistered = true;
    return this;
    }
  };
  const parseLevel = (levels: Levels, level: string): number => {
    if (level.toLowerCase() in levels) {
      return levels[level.toLowerCase()];
    } else {
      return 1;
    };
  };
  interface Entry { 
    logger?: string;
    description?: string;
    location?: string;
    level: string;
    module: string;
    message: string;
  };
  interface LogOptions {
    logger?: string;
    description?: string;
    minLevels: { [module: string]: string };
    format: Format;
  };
  interface Levels { 
    [key: string]: number
  }
  interface Format {
    name: string;
    fmt: (entry: Entry) => string;
  };  
}

// EXAMPLE

const manager = new Log.LogManager();
const logConfig = manager.configure({
  logger: "My Logger",
  description: "A typescript logging service",
  minLevels: Log.modules,
  activeFormat: Log.JsonFormat
}).registerConsoleLogger();
const log = logConfig.getLogger('main');

log.info('test log')
