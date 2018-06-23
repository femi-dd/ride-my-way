const app = require('../../server.js');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

/* eslint-disable */
describe('Checking and Testing all API Endpoints', () => {
  it('GET /api/v1/rides Should return all available rides in JSON format', () => {
    return chai.request(app)
      .get('/api/v1/rides/')
      .then((result) => {
        expect(result).to.have.status(200);
        expect(result).to.be.json;
        expect(result.body).to.be.an('object');
      });
  });

  it('GET /api/v1/rides/1 Should return ride details about the ride with ID of \'1\'', () => {
    return chai.request(app)
      .get('/api/v1/rides/1')
      .then((result) => {
        expect(result).to.have.status(200);
        expect(result).to.be.json;
        expect(result.body).to.be.an('object');
      });
  });

  it('POST /api/v1/rides/ Should allow creation of new data', () => {
    return chai.request(app)
      .post('/api/v1/rides').send({
        rideId: '1',
        from: 'Igando',
        to: 'Ikeja',
        driver: 'John Tunde',
        driverId: '1',
        carModel: 'Toyota Corolla 2015',
        car_plate: 'AND 247 LA',
        route: 'Abule egba, iyanaipaja, shomolo',
        leaves_at: '2: 35 AM',
      })
      .then((result) => {
        expect(result).to.have.status(201);
        expect(result).to.be.json;
        expect(result.body).to.be.an('object');
      });
  });

  it('POST / Should return result containing details of ride the user wants to join', () => {
    return chai.request(app).post('/api/v1/rides/1/requests').then((result) => {
      expect(result).to.have.status(201);
      expect(result).to.be.json;
      expect(result.body).to.be.an('object');
    });
  });

  it('GET /Should return 404 Not Found for invalid URL path', () => {
    return chai.request(app)
      .get('/anypath')
      .catch((error) => {
        expect(error).to.have.status(404);
      });
  });
});

/* eslint-enable */
