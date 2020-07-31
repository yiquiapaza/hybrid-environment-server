const dataJson = require('./data-json/data-json.service.js');
const dataString = require('./data-string/data-string.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(dataJson);
  app.configure(dataString);
};
