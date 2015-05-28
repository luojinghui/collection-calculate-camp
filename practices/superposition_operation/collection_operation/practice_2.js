'use strict';

function hybrid_operation_to_uneven(collection) {
    var sum = [] ;
    for (var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 != 0 ) {
            sum[sum.length] = (collection[i] * 3 + 2);
        }
    }
    return sum;
}

module.exports = hybrid_operation_to_uneven;
