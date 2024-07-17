const {createLogger, format, transports} = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
// Log Level Configuration
const log_levels = levels;
winston.addColors(myCustomLevels.colors);
// Formatting configuration

const config = {
  levels:  {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  }, 
  colors: {
    error: 'red',
    warn: 'orange',
    info: 'white',
    http: 'green',
    verbose: 'pink',
    debug: 'yellow',
    silly: 'blue'
  },
  transports: {
    console: new winston.transports.Console(),
    // Level 1
    error: new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    // Level 2
    warn: new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    // Level 3
    info: new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
    // Level 4
    http: new winston.transports.File({ filename: './logs/http.log', level: 'http'}),  
    // Level 5
    verbose: new winston.transports.File({ filename: './logs/verbose.log', level: 'verbose'}), 
    // Level 6
    debug: new winston.transports.File({ filename: './logs/debug.log', level:'debug'}),
    // Level 7
    silly: new winston.transports.File({ filename: './logs/silly.log', level:'silly'}),
    
    all: [
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warning.log', level: 'warn'}),
      new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
      new winston.transports.File({ filename: './logs/http.log', level: 'http'}),  
      new winston.transports.File({ filename: './logs/verbose.log', level: 'verbose'}), 
      new winston.transports.File({ filename: './logs/debug.log', level:'debug'}),
      new winston.transports.File({ filename: './logs/silly.log', level:'silly'}),
      new winston.transports.File({ filename: './logs/all.log', level: '*', }),
    ],
    all_with_console: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warning.log', level: 'warn'}),
      new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
      new winston.transports.File({ filename: './logs/http.log', level: 'http'}),  
      new winston.transports.File({ filename: './logs/verbose.log', level: 'verbose'}), 
      new winston.transports.File({ filename: './logs/debug.log', level:'debug'}),
      new winston.transports.File({ filename: './logs/silly.log', level:'silly'}),
      new winston.transports.File({ filename: './logs/all.log', level: '*' }),
    ],
    core: [
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warning.log', level: 'warn'}),
      new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
      new winston.transports.File({ filename: './logs/all.log', level: '*' }),
    ],
    core_with_console: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warning.log', level: 'warn'}),
      new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
      new winston.transports.File({ filename: './logs/all.log', level: '*' }),
    ],
    extended: [
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warning.log', level: 'warn'}),
      new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
      new winston.transports.File({ filename:'./logs/http.log', level: 'http'}),  
      new winston.transports.File({ filename: './logs/verbose.log', level: 'verbose'}),
      new winston.transports.File({ filename: './logs/all.log', level: '*' }),
    ],
    extended_with_console: [
      new winston.transports.File({ filename: './logs/all.log', level: '*' }),
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warning.log', level: 'warn'}),
      new winston.transports.File({ filename: './logs/info.log', level: 'info'}),
      new winston.transports.File({ filename: './logs/http.log', level: 'http'}),  
      new winston.transports.File({ filename:'./logs/verbose.log', level: 'verbose'}),
      new winston.transports.Console(),
]
  },    
  // custom formats
  custom: {    
    colorize: winston.format.colorize(this.colors),
    ignorePrivate: format((info, opts) => {
        if (info.private) { 
           return false;
        }
        return info
    }),
    willNeverThrow: format.combine(
        format(info => { return false })(), // Ignores everything
        format(info => { throw new Error('Never reached') })()), // Throws an exception
    volume: format((info, opts) => {
      if (opts.yell) {
        info.message = info.message.toUpperCase();
      } else if (opts.whisper) {
        info.message = info.message.toLowerCase();
      }
        return info;}),
  },

  // volume levels
  sound: {
    scream: this.formats.volume({ yell: true }),
    whisper: this.formats.volume({ whisper: true }),
  },
};


 

const logger = winston.createLogger({
  levels: log_levels.levels,
  format: [
    config.custom.colorize(), 
    config.custom.volume(),
    config.custom.ignorePsivate(), 
    config.custom.willNeverThrow(),
  ],
  transports: config.transports.all_with_console,
  exitOnError: false,

});
    
  


