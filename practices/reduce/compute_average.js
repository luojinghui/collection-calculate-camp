'use strict';

function compute_average(collection) {
    //在这里写入代码
    // var num = 0;
    // var result = 0;
    // for (var i = 0; i < collection.length; i++) {
    //     num += collection[i];
    // }
    // result = num / collection.length;
    // return result;

    var _ =require('../lodash/mylodash.js');
    var sum;

    sum = _.reduce(collection,function(a,b) {
        return a + b;
    });
    return (sum / collection.length);
}

module.exports = compute_average;
