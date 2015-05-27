'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码
//    var _ = require('../lodash/array');
//    var array = _.union(collection_a, collection_b);
//
//    return array;

    for(var i=0; i<collection_a.length; i++) {
        for(var j=0; j<collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]) {
                 collection_b = remove_element(j,collection_b);
            }
        }
    }
    add_element(collection_a,collection_b);
    return collection_a;
}

    function remove_element(index,array) {
        if(index>=0 && index<array.length) {
            for(var i=index; i<array.length; i++) {
                array[i] = array[i+1];
            }
                array.length = array.length-1;
        }
        return array;
    }

    function add_element(collection_a,collection_b) {
            for(var j=0; j<collection_b.length; j++) {
                collection_a.push(collection_b[j]);
            }
        }
module.exports = get_union;
