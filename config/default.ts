export default {
    port: 3000,
    logLevel: 'info',
    smtp: {
        user: process.env.USER,
        pass: process.env.PASS,
        host: process.env.HOST,
        port: 587,
        secure: false,
    },
}