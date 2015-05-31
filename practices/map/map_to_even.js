'use strict';
function map_to_even(collection){
    var map = require('../lodash/map.js');
    return map(collection,function(n) {
        return n * 2;
    });

}
module.exports = map_to_even;
