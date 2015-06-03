'use strict';
function rank_by_two_large_one_small(collection){
var array = collection;

for (var i = 0; i < array.length; i++) {
    for(var j = i; j < array.length; j ++) {
        if(array[i] > array[j]) {
            var temp = 0;

            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
    for (var a = 0; a < array.length; a +=3) {
        var temp_letter = 0;
        if(a < array.length - 2) {
        temp_letter = array[a];
        array[a] = array[a+1];
        array[a+1] = array[a+2];
        array[a+2] = temp_letter;
        }
    }
    return array;
}
module.exports = rank_by_two_large_one_small;
