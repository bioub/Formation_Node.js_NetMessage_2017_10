const app = require('../app');
const assert = require('assert');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
require('sinon-mongoose');
const Restaurant = require('../models/restaurant');

chai.use(chaiHttp);

describe('app', function () {

  beforeEach(function() {
    // mongoimport
  });

  describe('/api/restaurants', function () {

    describe('GET /api/restaurants', function () {
      it('should return array', function (done) {
        sinon.mock(Restaurant)
          .expects('find')
          .chain('limit').withArgs(10)
          .chain('exec')
          .resolves([{name: '1'}, {name: '2'}]);

        chai.request(app)
          .get('/api/restaurants')
          .end(function(err, res) {
            assert.equal(err, null);
            const restaurants = res.body;
            assert.equal(restaurants.length, 2);
            done();
          });

      });
    });
  });

});
