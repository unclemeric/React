/**
 * Created by Meric on 2016/10/14.
 */
var config = require('../config');
var log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'logs/cheese.log', category: 'cheese' }
    ]
});

var logger = log4js.getLogger('cheese');
logger.setLevel('DEBUG')

module.exports = logger;
