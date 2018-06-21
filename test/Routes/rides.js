// const app = require('../../api/routes/rides.js');
const app = require('../../server.js');
const chai = require('chai');

const should = chai.should();
const expect = chai.expect;

chai.use(require('chai-http'));



describe('Checking and Testing all API Endpoints', function () {
  this.timeout(500);

  before(function () {

  });

  after(function () {

  });

  it('GET /api/v1/rides Should return all available rides ins JSON format', function () {
    return chai.request(app)
      .get('/api/v1/rides/').then(function (result) {
        expect(result).to.have.status(200);
        // expect(res).to.be.json; expect(res.body).to.be.an('object');
      });
  });


});
