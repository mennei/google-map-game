const router = require ('express').Router ();
const conf = require ('../../../../server.config');

const {getGoalLocationService, getDistance} = require ('./googleMap.service');

router.route ('/getGoalLocationService').get (async (req, res) => {
  try {
    console.log ('In googleMap.route.js get function');
    const response = await getGoalLocationService (req);
    res.status (200).send ({data: response});
  } catch (error) {
    console.log ('Error while route /googleMap path in googleMap.route.js');
    const errCode = error.code || 500;
    const errMessage =
      error.message || `Error in route ${conf.BASE_API_PATH}googleMap`;
    res.status (errCode).json ({err: errMessage});
  }
});

router.route ('/getDistance').get (async (req, res) => {
  try {
    console.log ('In googleMap.route.js get function ', req.query);
    const params = req.query;
    const response = await getDistance (
      JSON.parse (params.ballLocation),
      JSON.parse (params.goalLocation)
    );
    res.status (200).send ({data: response});
  } catch (error) {
    console.log ('Error while route /googleMap path in googleMap.route.js');
    const errCode = error.code || 500;
    const errMessage =
      error.message || `Error in route ${conf.BASE_API_PATH}googleMap`;
    res.status (errCode).json ({err: errMessage});
  }
});
module.exports = router;
