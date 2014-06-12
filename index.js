var Conversion = require('transformer-conversion');
var tUsZipcode = require('transformer.us-zipcode');
var tUsCity = require('transformer.us-city');
// require any other modules you may need here.
var zipdb = require('zippity-do-dah');

module.exports = Conversion(tUsZipcode, tUsCity, convert);

function convert(zipcode) {
  var r = zipdb.zipcode(zipcode);
  return r.city +', '+ r.state;
}
