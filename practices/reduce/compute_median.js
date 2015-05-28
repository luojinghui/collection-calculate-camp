'use strict';

function compute_median(collection) {
    //在这里写入代码
    if(collection.length % 2 === 0) {
        sort(collection);
        var ave = (collection[collection.length / 2 - 1 ] + collection[collection.length / 2]) / 2;
        return ave;
    }else {
        var ave = collection[parseInt(collection.length / 2) ];
        return ave;
    }
}

function sort(array) {
    for (var i = 0; i < array.length; i ++) {
        var temp = 0;

        for(var j = i + 1; j < array.length; j ++) {
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
}
module.exports = compute_median;
