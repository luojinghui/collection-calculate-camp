'use strict';

function choose_multiples_of_three(collection) {

    var result = [];
    var _ = require('../lodash/mylodash.js');

    // for(var i=0; i<collection.length; i++) {
    //     if(collection[i] % 3 === 0 ) {
    //         result.push(collection[i]);
    //     }
    // }
    // return result;

    return _.filter(collection,function(n) {
        return n % 3 === 0;
    })
}

module.exports = choose_multiples_of_three;
