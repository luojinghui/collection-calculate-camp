'use strict';
var _ = require('../lodash/mylodash.js');

function get_letter_interval_2(number_a, number_b) {
    var array = _.range(number_a,number_b);

    return _.map(array,function(n) {
        return _.num_change_letter(n);
    });
}

module.exports = get_letter_interval_2;
