'use strict';
function collect_all_even(collection) {
//在这里写入代码
//    var _ = require('../lodash/array');
//    var even_number =  _.remove(collection, function(n) {
//        return n % 2 == 0;
//    });
//    return even_number;

    var even_number = [];
    for(var i=0; i<collection.length; i++) {
        if(collection[i] % 2 === 0 ) {
            even_number.push(collection[i]);
        }
    }
    return even_number;
}

module.exports = collect_all_even;
