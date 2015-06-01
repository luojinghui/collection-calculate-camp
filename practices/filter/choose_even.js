'use strict';

function choose_even(collection) {
    //在这里写入代码
//    var _ = require('../lodash/array');
//    var evens = _.remove(collection, function(n) {
//        return n % 2 == 0;
//    });
//    return evens;

    var _ = require('../lodash/mylodash.js');
    return _.filter(collection,function(n) {
        return n % 2 === 0;
    });
}

module.exports = choose_even;
