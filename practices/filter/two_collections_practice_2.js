'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
//  var _ = require('../lodash/');
//    var result = _.xor(collection_a,collection_b);

//  return result;

var result = [];
for(var i=0; i<collection_a.length; i++) {
    for(var j=0; j<collection_b.length; j++) {
        if(collection_a[i] === collection_b[j]) {
            collection_a = remove_element(i,collection_a);
        }
    }
}
return collection_a;
}

function remove_element(index,array) {
    if(index >= 0 && index < array.length) {
        for(var i=index; i<array.length; i++) {
            array[i] = array[i+1];
        }
            array.length = array.length-1;
    }
    return array;
}

module.exports = choose_no_common_elements;
