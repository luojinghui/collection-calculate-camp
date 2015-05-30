'use strict';
function one_add_next_multiply_three(collection){
    var array = [];
    var temp = 0;

    for (var i = 0; i < collection.length; i++) {
        if(i < collection.length - 1) {
            temp = (collection[i] + collection[i+1]) * 3;
            array.push(temp);
        }
    }
    return array;
}
module.exports = one_add_next_multiply_three;
