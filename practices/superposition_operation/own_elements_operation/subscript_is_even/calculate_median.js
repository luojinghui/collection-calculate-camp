'use strict';
var calculate_median = function(collection){
    var array = [];

    for (var i = 0; i < collection.length; i++) {
        if (i % 2 === 0) {
            array.push(collection[i]);
        }
    }
    return mod_num(array);
};

var mod_num = function(array) {
    var temp;

    if (array.length % 2 === 0) {
        temp = array[parseInt((array.length-1) / 2)] +
               array[parseInt((array.length) / 2)];
        temp = Math.ceil(temp / 2);
    } else {
        temp = array[Math.ceil(array.length / 2) - 1];
    }

    return temp;
}
module.exports = calculate_median;
