'use strict';

function amount_even(collection) {
    // var sum = 0;
    //
    // for (var i = 0; i < collection.length; i++) {
    //     if(collection[i] % 2 === 0) {
    //         sum += collection[i];
    //     }
    // }
    // return sum;

    var _ = require('../../lodash/mylodash.js');
    var array = _.filter(collection,function(n) {
        return n % 2 === 0;
    });

    return _.reduce(array,function(a,b) {
            return a + b ;
    });
}

module.exports = amount_even;
