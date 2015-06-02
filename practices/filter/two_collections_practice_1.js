'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
//  var _ = require('../lodash/');
//  var result = _.intersection(collection_a,collection_b);

//  return result;
    var _ = require('../lodash/mylodash.js');
    var result = [];

    _.foreach(collection_a,function(n) {
        for(var j=0; j<collection_b.length; j++) {
            if(n === collection_b[j]) {
                result[result.length] = n;
            }
        }
    });
    return result;
}

module.exports = choose_common_elements;
