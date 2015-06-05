'use strict';
var _ = require('../lodash/mylodash.js');

function get_intersection(collection_a, collection_b) {
    return _.intersection(collection_b,collection_a);

}


    // var result = [];
    // for(var i=0; i<collection_b.length; i++) {
    //     for(var j=0; j<collection_a.length; j++) {
    //         if(collection_b[i] === collection_a[j]) {
    //             result.push(collection_b[i]);
    //         }
    //     }
    // }
module.exports = get_intersection;
