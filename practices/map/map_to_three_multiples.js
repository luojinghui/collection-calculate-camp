'use strict';
function four(n) {
    return n * 3;
}
var map_to_three_multiples = function(collections){
//    var _ = require('../lodash/');
//    return _.map(collections,four);
    var result = [];
    for (var i=0; i<collections.length; i++) {
        result[result.length] = collections[i] * 3;
    }
    return result;
};

module.exports = map_to_three_multiples;
