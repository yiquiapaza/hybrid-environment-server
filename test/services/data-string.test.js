const assert = require('assert');
const app = require('../../src/app');

describe('\'DataString\' service', () => {
  it('registered the service', () => {
    const service = app.service('data-string');

    assert.ok(service, 'Registered the service');
  });
});
