import * as functions from 'firebase-functions';

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'render') {
    exports.render = require('./render')
}