'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码
    var _ = require('../lodash/array');
    var array = _.union(collection_a, collection_b);

    return array;
}

module.exports = get_union;
