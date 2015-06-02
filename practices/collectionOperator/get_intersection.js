'use strict';

function get_intersection(collection_a, collection_b) {

   // var _ = require('../lodash/array');
   // var num_mixed = [];
   //
   // num_mixed = _.intersection(collection_b,collection_a);
   // return num_mixed;

    var result = [];
    for(var i=0; i<collection_b.length; i++) {
        for(var j=0; j<collection_a.length; j++) {
            if(collection_b[i] === collection_a[j]) {
                result.push(collection_b[i]);
            }
        }
    }
    return result;

}

module.exports = get_intersection;
