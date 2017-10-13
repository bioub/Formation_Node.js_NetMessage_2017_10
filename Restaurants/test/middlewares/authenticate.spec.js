const authenticate = require('../../middlewares/authenticate');
const assert = require('assert');
const sinon = require('sinon');

describe('authenticate', function() {

  it('should call next', function() {
    var callback = sinon.spy();
    authenticate({}, {}, callback);
    assert(callback.calledOnce);
  });
});
