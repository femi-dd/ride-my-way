const RideController = require('../controllers/RideController');

const express = require('express');

const router = express.Router();

/**
 * Request Method    :  GET
 * Endpoint Function :  Fetches all available ride offers
*/
router.get('/', RideController.getAllRides);

/**
 * Method Endpoint   :  GET
 * Endpoint Function :  Fetches the details of a single ride offer requested by the user
 */
router.get('/:id', RideController.getRideById);

/**
 * Request Method : POST
 * Endpoint Function :  Enables the driver to create a new ride offer
 */
router.post('/', RideController.createNewRide);

/**
 * Request Method    :  POST
 * Endpoint Function :  Allows the user to make a request to join a ride
 */
router.post('/:rideId/requests', RideController.requestToJoinRideById);

module.exports = router;
