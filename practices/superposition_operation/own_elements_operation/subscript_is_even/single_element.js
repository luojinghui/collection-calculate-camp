'use strict';
var single_element = function(collection){
var array = [];
for (var i = 0; i < collection.length; i++) {
    if(i % 2 != 0) {
        array.push(collection[i]);
    }
}
    var array_alone = [];
    var ex = 0;

    for (var i = 0; i < array.length; i++) {
        if(array[ex] === array[i]) {
            ex = i;
            array_alone.push(array[ex]);
        }
    }

    for (var j = 0; j < array.length; j++) {
        for(var a = 0; a <array_alone.length; a++) {
            if (array[j] === array_alone[a]) {
                remove_element(j,array);
            }
        }
    }
    return array;
};

function remove_element(index,array) {
    if(index >= 0 && index < array.length) {
        for(var i=index; i<array.length; i++) {
            array[i] = array[i+1];
        }
            array.length = array.length-1;
    }
    return array;
}

module.exports = single_element;
