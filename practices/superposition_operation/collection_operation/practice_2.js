'use strict';

function hybrid_operation_to_uneven(collection) {
    // var sum = [] ;
    // for (var i = 0; i < collection.length; i++) {
    //     if(collection[i] % 2 != 0 ) {
    //         sum[sum.length] = (collection[i] * 3 + 2);
    //     }
    // }
    // return sum;

    var _ = require('../../lodash/mylodash.js');
    var array = [];

    array = _.filter(collection,function(n) {
        return n % 2 != 0;
    });
    return _.map(array,function(n) {
        return n * 3 + 2;
    });
}

module.exports = hybrid_operation_to_uneven;
