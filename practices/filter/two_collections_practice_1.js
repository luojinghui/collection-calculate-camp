'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
//  var _ = require('../lodash/');
//  var result = _.intersection(collection_a,collection_b);

//  return result;

    var result = [];
    for(var i=0; i<collection_a.length; i++) {
        for(var j=0; j<collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]) {
                result[result.length] = collection_a[i];
            }
        }
    }
    return result;
}

module.exports = choose_common_elements;
