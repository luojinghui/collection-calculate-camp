'use strict';
var _ = require('../lodash/mylodash.js');

function compute_median(collection) {
    //在这里写入代码
    var array = _.sort_array(collection);
    return _.median(array);
}

module.exports = compute_median;
