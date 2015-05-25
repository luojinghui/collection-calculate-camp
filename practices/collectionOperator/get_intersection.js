'use strict';

function get_intersection(collection_a, collection_b) {
    //在这里写入代码
    var _ = require('../lodash/array');
    var num_mixed = [];

    num_mixed = _.intersection(collection_b,collection_a);
    return num_mixed;
}

module.exports = get_intersection;
