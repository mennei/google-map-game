const turf = require ('@turf/turf');
const distance = require ('@turf/distance');

const getGoalLocationService = req => {
  console.log ('In getGoalLocationService');
  let {latitude, longitude} = req.query;
  latitude = JSON.parse (latitude);
  longitude = JSON.parse (longitude);
  let goalLocation = calculateGoalLocation (latitude, longitude, 1000);
  console.log ('goalLocation', goalLocation);
  return {
    lat: goalLocation[0],
    lng: goalLocation[1],
  };
};

function calculateGoalLocation (latitude, longitude, distance) {
  const line = turf.lineString ([
    [latitude, longitude],
    [latitude + distance, longitude + distance],
  ]);
  const along = turf.along (line, 1);
  console.log ('along ', along.geometry.coordinates);
  return along.geometry.coordinates;
}

function getDistance (ballLocation, goalLocation) {
  const ballPoint = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [ballLocation.lng, ballLocation.lat],
    },
  };

  const goalPoint = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [goalLocation.lng, goalLocation.lat],
    },
  };
  const destination = distance (ballPoint, goalPoint);
  console.log (destination);
  return destination;
}
module.exports = {getGoalLocationService, getDistance};
