var colors = {
    fgBlack: "\x1b[30m",
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
    fgMagenta: "\x1b[35m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m"
};
export const Logger = {
    error: function (message: any) {
        return console.info(colors.fgRed, message);
    },
    warning: function (message: any) {
        return console.info(colors.fgYellow, message);
    }
}