import log4js from 'log4js';

log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'logs/log4js.log' } },
    categories: { default: { appenders: ['cheese'], level: 'debug' } }
});

function getLogger(){
    return log4js.getLogger('cheese');
}

module.exports.getLogger = getLogger;