'use strict';

function collect_last_element(collection) {
    //在这里写入代码
//    var _ = require('../lodash/array');
//    var last_number = _.last(collection);

//    return last_number;

//    var last_number = collection[collection.length-1];
//    return last_number;

    var _ = require('../lodash/mylodash.js');
    return _.reduce(collection,function(a,b) {
        return b;
    })
}

module.exports = collect_last_element;
