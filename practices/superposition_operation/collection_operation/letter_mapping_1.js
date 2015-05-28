'use strict';

function even_to_letter(collection) {
    var array = [];
    for (var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 === 0 ) {
            array[array.length] = String.fromCharCode(i + 97);
        }
    }
    return array;
}

module.exports = even_to_letter;
