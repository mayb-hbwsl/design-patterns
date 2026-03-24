class Logger {
    private static instance: Logger;

    private constructor() {
        // Private constructor to prevent instantiation
        console.log("Logger instance created");
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2); // true, both logger1 and logger2 are the same instance