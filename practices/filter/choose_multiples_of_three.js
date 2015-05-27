'use strict';

function choose_multiples_of_three(collection) {

    //在这里写入代码
//    var _ = require('../lodash/array');
//    var evens = _.remove(collection, function(n) {
//        return n % 3 === 0 ;
//    });
//    return evens;

    var result = [];
    for(var i=0; i<collection.length; i++) {
        if(collection[i] % 3 === 0 ) {
            result.push(collection[i]);
        }
    }
    return result;
}

module.exports = choose_multiples_of_three;
