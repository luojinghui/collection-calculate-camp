'use strict';
function four(n) {
    return n * 3;
}
var map_to_three_multiples = function(collections){
    var _ = require('../lodash/');
    return _.map(collections,four);
};

module.exports = map_to_three_multiples;
