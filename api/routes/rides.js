const express = require('express');

const router = express.Router();

const allRides = require('../data/data.json');

/**
 * Request Method    :  GET
 * Endpoint Function :  Fetches all ride offers
*/
router.get('/', (request, response) => {
  response.status(200).json({
    rides: allRides,
  });
});

/**
 * Method Endpoint   :  GET
 * Endpoint Function :  Fetches the details of a single ride offer requested by the user
 */
router.get('/:id', (request, response) => {
  const rideId = request.params.id;
  response.status(200).json({
    ride_id: rideId,
    ride_data: allRides.rides[rideId],
  });
});

/**
 * Request Method : POST
 * Endpoint Function :  Enables the driver to create a new ride offer
 */
router.post('/', (request, response) => {
  /* eslint-disable */
  const {
    rideId, from, to, driver, driverId, carModel, carPlate, route, leavesAt,
  } = request.body;

  const newRide = {
    ride_id: rideId,
    from: from,
    to: to,
    driver: driver,
    driverId: driverId,
    carModel: carModel,
    carPlate: carPlate,
    route: route,
    leavesAt: leavesAt,
  }

  response.status(201).json({
    message: 'New ride route',
    data: newRide,
  });
  /* eslint-enable */
});

/**
 * Request Method    :  POST
 * Endpoint Function :  Allows the user to make a request to join a ride
 */
router.post('/:rideId/requests', (request, response) => {
  const { rideId } = request.params;
  const { name, phone, location } = request.body;
  if (name === undefined || phone === undefined || location === undefined) {
    response.status(400).json({
      error: 'Incomplete Data',
    });
  } else {
    const passenger = {
      passengerName: name,
      passengerPhone: phone,
      passengerLocation: location,
    };

    allRides.rides[rideId].passengers.push({ passenger });

    response.status(201).json({
      message: `Request to Join ride ${rideId} has been made.`,
      ride_id: rideId,
      passengerData: { passenger },
      l: allRides,
    });
  }
});

module.exports = router;
