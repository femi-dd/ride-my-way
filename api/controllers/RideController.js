const allRides = require('../data/data.json');

exports.getAllRides = (request, response) => {
  response.status(200).json({
    rides: allRides,
  });
};

exports.getRideById = (request, response) => {
  const rideId = request.params.id;
  response.status(200).json({
    ride_id: rideId,
    ride_data: allRides.rides[rideId],
  });
};

exports.createNewRide = (request, response) => {
  const {
    rideId, _from, _to, _driver, _driverId, _carModel, _carPlate, _route, _leavesAt,
  } = request.body;

  const newRide = {
    ride_id: rideId,
    from: _from,
    to: _to,
    driver: _driver,
    driverId: _driverId,
    carModel: _carModel,
    carPlate: _carPlate,
    route: _route,
    leavesAt: _leavesAt,
  };

  response.status(201).json({
    message: 'New ride route',
    data: newRide,
  });
};

exports.requestToJoinRideById = (request, response) => {
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
};
