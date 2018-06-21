/* eslint-disable */
const app = require('../../server.js');
const chai = require('chai');

const expect = chai.expect;

chai.use(require('chai-http'));

describe('Checking and Testing all API Endpoints', function () {

  it('GET /api/v1/rides Should return all available rides in JSON format', function () {
    return chai.request(app)
      .get('/api/v1/rides/')
      .then(function (result) {
        expect(result).to.have.status(200);
        expect(result).to.be.json; expect(result.body).to.be.an('object');
      });
  });

  it('GET /api/v1/rides/1 Should return ride details about the ride with ID of \'1\'', function () {
    return chai.request(app)
      .get('/api/v1/rides/1')
      .then(function (result) {
        expect(result).to.have.status(200);
        expect(result).to.be.json;
      });
  });

  it('POST /api/v1/rides/ Should allow creation of new data', function () {
    return chai.request(app)
      .post('/api/v1/rides').send({
        ride_id: "1",
        from: "Igando",
        to: "Ikeja",
        driver: "John Tunde",
        driver_id: "1",
        car_model: "Toyota Corolla 2015",
        car_plate: "AND 247 LA",
        route: "Abule egba, iyanaipaja, shomolo",
        leaves_at: "2: 35 AM"
      })
      .then(function (result) {
        expect(result).to.have.status(201);
        expect(result).to.be.json;
        expect(result.body).to.be.an('object');
      });
  });

  it("POST / Should return result containing details of ride the user wants to join", function () {
    return chai.request(app)
      .post('/api/v1/rides/1/requests')
      .then(function (result) {
        expect(result).to.have.status(200);
        expect(result).to.be.json;
        expect(result.body).to.be.an('object');
      });
  });

  // it('GET /Should return 404 Not Found for invalid URL path', function () {
  //   return chai.request(app)
  //     .get('/any-path').
  //     then(function () {
  //       throw new Error('Path exists!');
  //     })
  //     .catch(function (error) {
  //       expect(error).to.have.status(404);
  //     });
  // });

});

/* eslint-enable */
