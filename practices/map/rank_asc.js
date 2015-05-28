'use strict';
var rank_asc = function(collection){
//    return collection.sort(sortNumber);
    var array_sort = [];
    if(collection.length === 1) {
        return collection[0];
    } else {
    for (var i = 0; i < collection.length; i ++) {
        var temp = 0;

        for(var j = i + 1; j < collection.length; j ++) {
            if (collection[i] < collection[j]) {
                temp = collection[j];
                collection[j] = collection[i];
                collection[i] = temp;
                }
            }
        }
    }
    return collection;
};

//function sortNumber(c,d) {
//    return d - c ;
//}
module.exports = rank_asc;
