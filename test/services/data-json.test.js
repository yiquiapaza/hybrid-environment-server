const assert = require('assert');
const app = require('../../src/app');

describe('\'DataJson\' service', () => {
  it('registered the service', () => {
    const service = app.service('data-json');

    assert.ok(service, 'Registered the service');
  });
});
