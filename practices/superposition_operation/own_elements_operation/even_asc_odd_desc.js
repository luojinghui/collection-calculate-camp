'use strict';
var _ = require('../../lodash/mylodash.js');
var even_asc_odd_desc = function(collection){
    var array = [];
    var array_2 = [];

    for (var i = 0; i < collection.length; i ++) {
        for(var j = i; j < collection.length; j ++) {
            if(collection[i] > collection[j]) {
                var temp = 0;

                temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }
    _.foreach(collection,function(n) {
        if(n % 2 === 0) {
            array.push(n);
        }
    });

    for (var a = collection.length - 1; a >= 0; a --) {
        if(collection[a] % 2 != 0) {
            array_2.push(collection[a]);
        }
    }

    return array.concat(array_2);
};
module.exports = even_asc_odd_desc;
