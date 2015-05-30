'use strict';
var is_exist_element = function(collection,element){
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 === 0) {
            if (collection[i] === element) {
                return true;
            }
        }
    }

    for (var j = 0; j < collection.length; j++) {
        if (j % 2 === 0) {
            if (collection[j] != element) {
                return false;
            }
        }
    }
};
module.exports = is_exist_element;
