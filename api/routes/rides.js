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
    ride_data: allRides[rideId],
  });
});

/**
 * Request Method : POST
 * Endpoint Function :  Enables the driver to create a new ride offer
 */
router.post('/', (request, response) => {
  const newRideData = request.body;

  response.status(201).json({
    message: 'New ride route',
    data: newRideData,
  });
});

/**
 * Request Method    :  POST
 * Endpoint Function :  Allows the user to make a request to join a ride
 */
router.post('/:ride_id/requests', (request, response) => {
  const rideId = request.params.ride_id;
  response.status(200).json({
    message: 'Make ride request route',
    id: rideId,
  });
});

module.exports = router;
