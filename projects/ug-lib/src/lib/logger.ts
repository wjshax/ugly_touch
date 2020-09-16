export interface Log {
    symbol: symbol;
    logger: Logger;
}

export enum LoggerType {
    info = 0,
    warn,
    error,
}

export class Logger {
    messages: { type: LoggerType, msg: string }[];
    constructor() {
        this.clear();
    }
    convertMsg(...logs: any[]) {
        let msg = '';
        for (const log of logs) {
            msg += log;
            msg += ' ';
        }
        return msg;
    }
    error(...logs: any[]) {
        this.messages.push({ type: LoggerType.error, msg: this.convertMsg(logs) });
    }
    warn(...logs: any[]) {
        this.messages.push({ type: LoggerType.warn, msg: this.convertMsg(logs) });
    }
    out(...logs: any[]) {
        this.messages.push({ type: LoggerType.info, msg: this.convertMsg(logs) });
    }
    clear() {
        this.messages = new Array();
    }
}
