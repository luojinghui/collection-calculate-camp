'use strict';
//function two(n) {
//    return n * 2;
//}
function map_to_even(collection){
    var map = require('../lodash/map.js');
//    return _.map(collection, two);

//    var result = [];
//    for (var i=0; i<collection.length; i++) {
//        result[result.length]=collection[i] * 2;
//    }
//    return result;
    return map(collection,function(n) {
        return n * 2;
    });

}


module.exports = map_to_even;
