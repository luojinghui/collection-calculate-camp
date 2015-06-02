'use strict';

function grouping_count(collection) {

    //在这里写入代码
//    var _ = require('../lodash/');
//    var result = _.countBy(collection, function(n) {
//        return this.floor(n);
//    },Math);
//    return result;
    var _ = require('../lodash/mylodash.js');
    var result = {};

    _.foreach(collection,function(n,i) {
        result[n] = result[n] || 0;
        result[n] ++;

    });
    return result;
}

module.exports = grouping_count;

/*
for(var i = 0;i < collection.length;i++) {
         if(!! number[collection[i]]) {
             number[collection[i]] ++;
         }else {
             number[collection[i]] = 0;
             number[collection[i]] ++;
         }
     }
*/
