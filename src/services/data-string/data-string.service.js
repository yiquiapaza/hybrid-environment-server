// Initializes the `DataString` service on path `/data-string`
const { DataString } = require('./data-string.class');
const hooks = require('./data-string.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/data-string', new DataString(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('data-string');

  service.hooks(hooks);
};
