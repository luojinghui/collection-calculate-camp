
'use strict';
var _ = require('../lodash/mylodash.js');

function get_integer_interval(number_a, number_b) {
    return _.range(number_a,number_b);

//     var a = [];
//
//     if(number_a <= number_b) {
// //        for(var i=number_a; i<=number_b; i++) {
// //            a.push(i);
//         _.foreach(collection_a,function(n,i) {
//             a.push(i);
//         });
//         }
//     } else {
//         _.foreach(collection_b,function(n,i) {
//             a.push(j);
//         });
//     }
//     return a;
}
module.exports = get_integer_interval;
