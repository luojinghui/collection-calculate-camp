'use strict';
function two(n) {
    return n * 2;
}
function map_to_even(collection){
//    var _ = require('../lodash/');
//    return _.map(collection, two);

    var result = [];
    for (var i=0; i<collection.length; i++) {
        result[result.length]=collection[i] * 2;
    }
    return result;
}
module.exports = map_to_even;
