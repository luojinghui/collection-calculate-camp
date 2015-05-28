'use strict';
var rank_desc = function(collection){
//    var result = collection.sort(function(a,b) {
//        return a - b;
//    });
//    return result;
    var array_sort = [];

    if(collection.length === 1) {
        return collection[0];
    } else {
        for (var i = 0; i < collection.length; i ++) {
            var temp = 0;

            for(var j = i + 1; j < collection.length; j ++) {
                if (collection[i] > collection[j]) {
                    temp = collection[j];
                    collection[j] = collection[i];
                    collection[i] = temp;
                }
            }
        }
    }
    return collection;
};

module.exports = rank_desc;
