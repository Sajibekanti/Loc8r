
module.exports.homelist = function(req, res){
  res.render('location-list', {
    title : 'Loc8r - find a place to work with wifi',
    pageHeader : {
      title : 'Loc8r',
      strapline : 'Find places to FUCK with wifi near you!'
    },
    locations : [
      {
        name : 'Starcups',
        address : '125 High Street',
        rating : 3,
        facilities : ['Hot drinks', 'Food', 'Premium wifi'],
        distance : '100m'
      }, {
        name : 'Cafe Hero',
        address : '125 High Street',
        rating : 4,
        facilities : ['Hot drinks', 'Food', 'Premium Wifi'],
        distance : '200m'
      }, {
        name : 'Burger Queen',
        address : '125 High Street',
        facilities : ['Food', 'Premium Wifi'],
        rating : 2,
        distance : '250m'
      }
    ]
  });
};

module.exports.locationInfo = function(req, res){
  res.render('location-info', {title : 'Location Info'});
};

module.exports.addReview = function(req, res){
  res.render('location-review-form', {title : 'Add Review'});
};
