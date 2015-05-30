'use strict';
function rank_by_two_large_one_small(collection){
var array = [];
for (var i = 0; i < collection.length; i++) {
    for(var j = i; j < collection.length; j ++) {
        if(collection[i] > collection[j]) {
            var temp = 0;

            temp = collection[i];
            collection[i] = collection[j];
            collection[j] = temp;
        }
    }
}
    for (var a = 0; a < collection.length; a +=3) {
        var temp_letter = 0;
        if(a < collection.length - 2) {
        temp_letter = collection[a];
        collection[a] = collection[a+1];
        collection[a+1] = collection[a+2];
        collection[a+2] = temp_letter;
        }
    }
    return collection;
}
module.exports = rank_by_two_large_one_small;
