'use strict';
function two(n) {
    return n * 2;
}
function map_to_even(collection){
    var _ = require('../lodash/');
    return _.map(collection, two);
}
module.exports = map_to_even;
