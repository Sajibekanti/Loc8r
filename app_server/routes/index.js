var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/*Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo );
router.get('/location/review/new', ctrlLocations.addReview);

//Other pages
router.get('/about', ctrlOthers.index);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
