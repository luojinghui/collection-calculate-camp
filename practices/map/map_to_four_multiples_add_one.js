'use strict';
function twoaddone(n) {
    return n * 4 + 1;
}
var map_to_four_multiples_add_one = function(collection){
//    var _ = require('../lodash/');
//    var result = _.map(collection,twoaddone);
//    return result;

    var result = [];
    for (var i=0; i<collection.length; i++) {
        result[result.length]=collection[i] * 4 + 1;
    }
    return result;
};


module.exports = map_to_four_multiples_add_one;
