var transformer = require('dat-transformer');
var tUsZipcode = transformer('us-zipcode');
var tUsCity = transformer('us-city');
// require any other modules you may need here.
var zipdb = require('zippity-do-dah');

module.exports = transformer.Conversion(tUsZipcode, tUsCity, convert);

function convert(zipcode) {
  var r = zipdb.zipcode(zipcode);
  return r.city +', '+ r.state;
}
