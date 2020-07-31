// Initializes the `DataJson` service on path `/data-json`
const { DataJson } = require('./data-json.class');
const hooks = require('./data-json.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/data-json', new DataJson(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('data-json');

  service.hooks(hooks);
};
