if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'render') {
    exports.render = require('./render')
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'clean') {
  exports.clean = require('./clean')
}