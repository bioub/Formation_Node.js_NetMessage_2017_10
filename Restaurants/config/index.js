if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config.prod.json');
}
else {
  module.exports = require('./config.dev.json');
}
