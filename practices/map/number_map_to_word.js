'use strict';
function letter(n) {
    return String.fromCharCode(n+96);
}
var number_map_to_word = function(collection){
    var _ = require('../lodash/');
    var result = _.map(collection,letter)

    return result;
};

module.exports = number_map_to_word;
