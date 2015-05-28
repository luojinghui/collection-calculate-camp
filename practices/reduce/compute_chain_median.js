'use strict';

function compute_chain_median(collection) {
    //在这里写入代码
    var array_2 = [];
    var array = [];
    array_2 =  collection.split('->');
    var num ;
    for (var i = 0; i < array_2.length; i++) {
        array.push(Number(array_2[i]));
    }
    sort(array);
    var ave = (array[array.length / 2 - 1 ] + array[array.length / 2]) / 2;
    return ave;

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
module.exports = compute_chain_median;

/*
'use strict';

function compute_chain_median(collection) {
    var array = [];
    var num = "";

    for(var i = 0; i < collection.length; i++) {
        if(parseInt(collection[i]) === parseInt(collection[i])) {
            num += collection[i];
        }else {
            if(num.length != 0){
                array[array.length] = parseInt(num);
                num = "";
            }
        }
        if(i === collection.length-1){
            array[array.length] = parseInt(num);
        }
    }

    for(var i = 0; i < array.length; i++) {
        for(var j = i; j < array.length; j++) {
            if(array[i] > array[j]) {
                array[i] = array[i] + array[j];
                array[j] = array[i] - array[j];
                array[i] = array[i] - array[j];
            }
        }
    }

    if(array.length % 2 === 0) {
        return (array[array.length/2-1]+array[array.length/2])/2;
    }else{
        return array[parseInt(array.length/2)];
    }

}

module.exports = compute_chain_median;
*/
