'use strict';

function collect_max_number(collection) {
    var result;
    if(collection.length === 0) {
        result = collection[0];
    }else {
        for (var i = 0; i < collection.length; i++) {
            if(collection[i] < collection[i+1]) {
                result = collection[i+1];
        }
    }
}
    return result;
}

module.exports = collect_max_number;
