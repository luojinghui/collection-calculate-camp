'use strict';

function average_to_letter(collection) {
    var sum = 0 ;

    for (var i = 0; i < collection.length; i++) {
        sum += collection[i];
    }
    var ave = Math.ceil( sum / (collection.length ) );
    return String.fromCharCode(ave + 96);
}

module.exports = average_to_letter;
